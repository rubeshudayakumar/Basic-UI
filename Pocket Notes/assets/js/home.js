$(document).ready(function () {
    let isNextButtonClicked = false;
    $(".new-btn").click(function (e) { 

        // creating the tick mark
        let tick = document.createElement("div");
        tick.className = "tick";

        // getting the previously selected color tick or assuming the first color 
        // as the seleted color 
        if(localStorage.getItem("noteTheme")==null){
            $(".pink").append(tick);
            if(isNextButtonClicked==false){
                localStorage.setItem("noteTheme","pink");
                isNextButtonClicked = true;
            }
        }else{
            if(isNextButtonClicked==false){
                $("."+localStorage.getItem("noteTheme")).append(tick);
                isNextButtonClicked = true;
            }
        }

        // displaying the modal form on clicking the new button
        $(".new-note-section").css("right",0);
        $(".new-note-container").css("display","block");

        // closing the modal form on clicking the close button
        $(".close-section button").click(function (e){
            $(".new-note-section").css("right",-($(".new-note-section").width()));
            $(".new-note-container").css("display","none");
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

    });
});