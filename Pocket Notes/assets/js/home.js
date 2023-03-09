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
                appendNoteToDom(notes[initialCount]);
                initialCount++;
                if(initialCount==notes.length){
                    // we hide the load more button if we display all the notes
                    $(".load-more").css("display","none");
                    break;
                }
            }
            else{
                // appending it to the dom if it is not a number divisible by 10
                appendNoteToDom(notes[initialCount]);
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

    function appendNoteToDom(element){
         // creating the note container
         let notesContainer = document.createElement("div");
         notesContainer.className = "note-container";
         notesContainer.style.backgroundColor = colors[element.color];
         notesContainer.id = element.id;

         // creating title 
         let title = document.createElement("h3");
         title.innerText = element.title;

         // creating Date 
         let date = document.createElement("h5");
         date.innerText = element.date;

         // adding the content 
         let content = document.createElement("p");
         content.innerText = element.content;

         notesContainer.appendChild(title);
         notesContainer.appendChild(date);

         // adding the image url 
         if(element.url != ""){
             let img = document.createElement("img");
             img.src = element.url;
             notesContainer.appendChild(img);
         }

        //  appending the content to the container and pushing everything to the dom
         notesContainer.appendChild(content);
         $(".pocket-notes-container").prepend(notesContainer);


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
            });
        }else{
            $(".new-note-section").css("right",-($(".new-note-section").width()));
            $(".new-note-container").css("display","none");
        }
        
    }

    // adding event listener for the add note button
    $(".add-btn").click(function (e){

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
            notes.push(note);
            localStorage.setItem("notes",JSON.stringify(notes));
            $(".empty-notes").css("display","none");
            $(".delete-btn").css("display","inline-block");
        }
        else{
            //  if there is a list
            var notes = JSON.parse(localStorage.getItem("notes"));
            notes.push(note);
            if(notes.length>10){
                $(".load-more").css("display","inline-block");
            }
            // updating it to the local storage
            localStorage.setItem("notes",JSON.stringify(notes));
        }

        // appending it to the dom 
        appendNoteToDom(note);

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
            closeDeleteAllModal();
            $(".delete-btn").css("display","none");
        });

    });

});