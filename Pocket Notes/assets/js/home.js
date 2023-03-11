$(document).ready(function () {

    // notes colors 
    let colors = {
        pink : "#EBCCED",
        white : "#FCFCFC",
        yellow : "#FFCA71",
        green: "#E5EE91",
        skin: "#FFA78C",
    };

    // initial load count
    var initialCount = 0;

    // loading the notes 10 nu by 10
    function appendTenNodes(){
        for(var i=0;i<10;i++) {
            // if the count is 10 we stop here and wait until load more clicked
            if(initialCount%10 != 0 || initialCount==0){
                appendNoteToDom(notes[initialCount],false);
                initialCount++;
                if(initialCount==notes.length){
                    // we hide the load more button if we display all the notes
                    $(".load-more").css("display","none");
                    break;
                }
            }
            else{
                // appending it to the dom if it is not a number divisible by 10
                appendNoteToDom(notes[initialCount],false);
                break;
            }
         };
    }

    // on click load more button invoke append 10 nodes function is called
    $(".load-more").click((e) => {
        initialCount++;
        appendTenNodes();
    });

    // getting the previous notes from the local storage
    var notes = JSON.parse(localStorage.getItem("notes"));

    if(localStorage.getItem("notes")==null){
        // display the ... notes you add appear heres
        $(".empty-notes").css("display","block");
        $(".delete-btn").css("display","none");
        $(".load-more").css("display","none");
    }
    else{
        $(".empty-notes").css("display","none");
        // appending all the notes to the dom 
        appendTenNodes();
   
    }

    function appendNoteToDom(element,option){
         // creating the note container
         $notesContainer = $("<div>").addClass("note-container").css("background-color",colors[element.color]).attr("id",element.id);

         // creating title 
         $notesContainer.append($("<h3>").text(element.title));

         // creating Date 
         $notesContainer.append($("<h5>").text(element.date));
         
         // adding the image url 
         if(element.url != ""){
            $notesContainer.append($("<img>").attr("src",element.url));
         }

          // adding the content 
          $notesContainer.append($("<p>").text(element.content));

         if(initialCount==notes.length || option==true){
            $(".pocket-notes-container").prepend($notesContainer);
         }
         else{
            $(".pocket-notes-container").append($notesContainer);
         }

        //  getting the element id on clicking of the parent
         $(`#${element.id}`).click((e)=>{
            
            // extracting the clicked note id with the help of the split and slice function
            var noteId = e.target.closest('.note-container').outerHTML.split("id")[1].split("style")[0].substring(2,).slice(0,-2);

            // setting the note id to the session storage
            sessionStorage.setItem("noteid",noteId);

            // redirecting the page
            window.location.href = "note-detail.html";

         });

    }

    

    let isNewButtonClicked = false;
    $(".new-btn").click(function (e) { 

        $(".add-btn").css("opacity","0.5");
        $(".title").css("border","none");
        $(".form-section span").text("");

        // creating the tick mark
        let tick = document.createElement("div");
        tick.className = "tick";

        // getting the previously selected color tick or assuming the first color 
        // as the seleted color 
        if(localStorage.getItem("noteTheme")==null){
            $(".pink").append(tick);
            if(isNewButtonClicked==false){
                localStorage.setItem("noteTheme","pink");
                isNewButtonClicked = true;
            }
        }else{
            if(isNewButtonClicked==false){
                $("."+localStorage.getItem("noteTheme")).append(tick);
                isNewButtonClicked = true;
            }
        }

        // $(".new-note-section").mouseleave(function () { 
        //     closeModel();
        // });

        // displaying the modal form on clicking the new button
        $(".new-note-section").css("right",0);
        $(".new-note-container").css("display","block");

        

       

        // closing the modal form on clicking the close button
        $(".close-section button").click(function (e){
            closeModel();
        });

        // adding event listeners for the individual colors
        $(".color").click(function (e){

            // preventing the duplicate ticks on the shape
            let selectedShape = $(this).attr("class").split(" ")[1];
            if(selectedShape==localStorage.getItem("noteTheme")){
                return;
            }

            // appending the tick on the seleted color div
            $(this).append(tick);

            // storing it to the local storage
            localStorage.setItem("noteTheme",selectedShape);
            e.stopPropagation();
        });

        $(".new-note-container").click((e)=>{
            closeModel();
        });

    });

    // function for closing the modal
    function closeModel(){

        if($(".title").val().trim()!="" || $(".url").val().trim()!="" || $(".content").val().trim()!=""){
            $(".delete-note-leave-container").css("display","flex");
            $(".delete-note-leave-btn").click((e) => {
                $(".new-note-section").css("right",-($(".new-note-section").width()));
                $(".new-note-container").css("display","none");
                $(".delete-note-leave-container").css("display","none");
                // erase all inputs
            });
            $(".delete-note-leave-container-close-window").click((e) => {
                $(".delete-note-leave-container").css("display","none");
            });
        }else{
            $(".content").val("");
            $(".title").val("");
            $(".url").val("");
            $(".new-note-section").css("right",-($(".new-note-section").width()));
            $(".new-note-section").off("mouseleave");
            $(".new-note-container").css("display","none");
        }
        
    }

    var isTitleKeyedIn = false;
    var isContentKeyedIn = false;

    $(".title").keypress(function (e) { 
        isTitleKeyedIn = true;
        if(isTitleKeyedIn == true && isContentKeyedIn ==true){
            $(".add-btn").css("opacity","1");
        }
    });

    $(".content").keypress(function (e){
        isContentKeyedIn = true;
        if(isTitleKeyedIn == true && isContentKeyedIn == true){
            $(".add-btn").css("opacity","1");
        }
    });

    // adding event listener for the add note button
    $(".add-btn").click(function (e){
        $(".title").css("border","none");
        $(".form-section span").text("");
        if($(".title").val().length>100){
            $(".title").css("border","1px solid #fff")
            $(".form-section span").text("Title should not exceed 100 words");
            return;
        }else if($(".content").val().length==0 || $(".title").val().length==0){
            $(".form-section span").text("There should be some content");
            return;
        }
        else{
            $(".add-btn").css("opacity","1");
        }

        // constructing the note object 
        let note = {};
        var date = Date();
        note.title = $(".title").val();
        if($(".url").val().trim()==""){
            note.url = "";
        }else {
            note.url = $(".url").val();
        }
        note.id = Math.random().toString().substring(2);

        // extracting the date from the current date
        note.date = date.toString().slice(4,10)+","+date.toString().slice(11,15);

        // extracting the content and color 
        note.content = $(".content").val();
        note.color = localStorage.getItem("noteTheme");   

        // checking the the local storage is null else creating the new attribute
        if(localStorage.getItem("notes")==null){
            var notes = [];
            notes.unshift(note);
            localStorage.setItem("notes",JSON.stringify(notes));
            $(".empty-notes").css("display","none");
            $(".delete-btn").css("display","inline-block");
        }
        else{
            //  if there is a list
            var notes = JSON.parse(localStorage.getItem("notes"));
            notes.unshift(note);
            if(notes.length>10){
                $(".load-more").css("display","inline-block");
            }
            // updating it to the local storage
            localStorage.setItem("notes",JSON.stringify(notes));
        }

        // appending it to the dom 
        appendNoteToDom(note,true);

        // closing the modal
        $(".new-note-section").css("right",-($(".new-note-section").width()));
        $(".new-note-container").css("display","none");

        // erase all inputs
        $(".content").val("");
        $(".title").val("");
        $(".url").val("");

    });

    // adding event listener for the delete all button
    $(".delete-btn").click((e) => {


        function displayDeleteAllModal(){
            // showing the modal 
            $(".new-note-container").css("display","block");
            $(".delete-all-confirm-container").css("display","flex");
        }

        function closeDeleteAllModal(){
            $(".new-note-container").css("display","none");
            $(".delete-all-confirm-container").css("display","none");
        }

        displayDeleteAllModal();

        // adding the event listner for the close modal 
        $(".delete-all-confirm-container-close-window").click((e) => {
            closeDeleteAllModal();
            
        });

        // adding the event listener for the delete all button
        $(".delete-all-confirm-btn").click((e) => {
            localStorage.removeItem("notes");
            $(".pocket-notes-container").html("");
            $(".empty-notes").css("display","block");
            $(".content").val("");
            $(".title").val("");
            $(".url").val("");
            closeDeleteAllModal();
            $(".delete-btn").css("display","none");
            

        });

    });

});