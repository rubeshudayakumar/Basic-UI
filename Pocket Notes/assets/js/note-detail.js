$(document).ready(function () {
     // notes colors 
     let colors = {
        pink : "#EBCCED",
        white : "#FCFCFC",
        yellow : "#FFCA71",
        green: "#E5EE91",
        skin: "#FFA78C",
    };
    // declaring the notes list as global variable
    var notesList = "";

    // getting the clicked note id from the session storage
    var currentNoteId = sessionStorage.getItem("noteid");

    var currentNoteIndex = 0;

    // getting the index of the note from the available local storage
    function getFromLocalStorage(){
        notesList = JSON.parse(localStorage.getItem("notes"));
        notesList.forEach((element,index) => {
            if(element.id == currentNoteId){
                currentNoteIndex = index;
            }
        });
        // adding the data from the session storage
        $(".note-color").css("background-color",colors[notesList[currentNoteIndex].color]);
        $(".note-details h3").text(notesList[currentNoteIndex].title);
        $(".note-details h5").text(notesList[currentNoteIndex].date);
        $(".note-details p").text(notesList[currentNoteIndex].content);

        if(notesList[currentNoteIndex].url!="" && $("img").length==0){
            var image = document.createElement("img");
            image.src = notesList[currentNoteIndex].url;
            image.alt = "note image";
            $(".note-details div").append(image);
        }

    }
    // calling the above function 
    getFromLocalStorage();

    $("i").click((e) => {
        window.location.href = "home.html";
    });

   

    let isEditButtonClicked = false;
    $(".edit-btn").click(function (e) {

        $(".form-section span").text("");
        $(".title").css("border","none");

        // creating the tick mark
        let tick = document.createElement("div");
        tick.className = "tick";
        if(isEditButtonClicked==false){
            $(`${colors[notesList[currentNoteIndex].color]}`).append(tick);
            isEditButtonClicked = true;
        }
        
        $(".new-note-section").mouseleave(function () { 
            closeModel();
        });

        

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

            $(".color").html("");

            // appending the tick on the seleted color div
            $(this).append(tick);



            // storing it to the local storage
            localStorage.setItem("noteTheme",selectedShape);
            e.stopPropagation();
        });


        // adding the previous values to the dom
        $(`.${notesList[currentNoteIndex].color}`).append(tick);
        $(".title").val(notesList[currentNoteIndex].title);
        $(".url").val(notesList[currentNoteIndex].url);
        $(".content").val(notesList[currentNoteIndex].content);

        function arraymove(arr, fromIndex, toIndex) {
            var element = arr[fromIndex];
            arr.splice(fromIndex, 1);
            arr.splice(toIndex, 0, element);
        }

        // adding event listener for the event listeners
        $(".save-btn").click((e) => {
            $(".form-section span").text("");
            $(".title").css("border","none");
            if($(".title").val().length ==0 || $(".content").val().length==0){
                $(".form-section span").text("Title and content should not be empty.");
                return;
            }else if($(".title").val().length>100){
                    $(".title").css("border","1px solid #fff")
                    $(".form-section span").text("Title should not exceed 100 words");
                    return;
            }

            // updating contents to the variables and updating it to the local storage
            notesList[currentNoteIndex].title = $(".title").val();
            notesList[currentNoteIndex].url = $(".url").val();
            notesList[currentNoteIndex].content = $(".content").val();
            notesList[currentNoteIndex].color = localStorage.getItem("noteTheme");
            var date = Date();
            notesList[currentNoteIndex].date = date.toString().slice(4,10)+","+date.toString().slice(11,15);

            arraymove(notesList,currentNoteIndex,0);

            localStorage.setItem("notes",JSON.stringify(notesList));
            
            getFromLocalStorage();

            $(".new-note-section").css("right",-($(".new-note-section").width()));
            $(".new-note-container").css("display","none");
            

        });

        $(".new-note-container").click((e)=>{
            closeModel();
        });

    });

    $(".delete-note-btn").click((e) => {
        $(".delete-note-confirm-container").css("display","flex");
        $(".new-note-container").css("display","block");

        $(".delete-note-confirm-close-window").click((e) => {
            $(".new-note-container").css("display","none");
            $(".delete-note-confirm-container").css("display","none");
        });

        $(".delete-note-confirm-btn").click((e)=>{
            notesList.splice(currentNoteIndex,1);
            localStorage.setItem("notes",JSON.stringify(notesList));
            window.location.href = "home.html";
            $(".delete-note-confirm-container").css("display","none");
            $(".new-note-container").css("display","none");
        });
        $(".delete-note-confirm-container-close-window").click((e) => {
            $(".delete-note-confirm-container").css("display","none");
            $(".new-note-container").css("display","none");
        });
    });
    
    // function for closing the modal
    function closeModel(){
        // asking for the user confirmatin to leave
        if($(".title").val().trim()!="" || $(".url").val().trim()!="" || $(".content").val().trim()!=""){
            $(".delete-note-leave-container").css("display","flex");
            $(".delete-note-leave-container-close-window").click((e) => {
                $(".delete-note-leave-container").css("display","none");
            });
            $(".delete-note-leave-btn").click((e) => {
                $(".new-note-section").css("right",-($(".new-note-section").width()));
                $(".new-note-container").css("display","none");
                $(".delete-note-leave-container").css("display","none");
            });
        }else{
            $(".new-note-section").css("right",-($(".new-note-section").width()));
            $(".new-note-section").off("mouseleave");
            $(".new-note-container").css("display","none");
        }
    }

});