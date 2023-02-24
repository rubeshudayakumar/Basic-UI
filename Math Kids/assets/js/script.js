// code for putting tick mark
var shapesList = document.querySelectorAll(".shapeContainer .shape");

var shapeName = "triangle";

// code for selecting the shapes
shapesList.forEach((val) => {
    let selectedShape = "triangle";
    val.addEventListener("click",(event)=>{
        event.target.innerHTML = "<div class='tickMark'></div>";
        selectedShape = event.target;
        shapesList.forEach((val)=>{
            if(val!=selectedShape){
                val.innerHTML = "";
            }
        });
        shapeName = selectedShape.outerHTML;
        shapeName = shapeName.split("shape")[0].split("=")[1].slice(1).trim();
        if(shapeName=="triangle"){
            shapesList[1].children[0].classList.add("alignTick");
        }
        document.querySelector(".chooseShapeSection button").style.visibility = "visible";
    });
});

// code for triggering next button click event
document.querySelector(".nextButton").addEventListener("click",(event)=>{
    let currentSection =  document.querySelector(".calculationArea");
    currentSection.removeChild(currentSection.childNodes[3]);
    
});

