// code for putting tick mark

// var shapeName = "triangle";

// var inputValue1 = ""

// var inputValue2 = ""

// var result = 0

var shapes = [
    {
        name : "circle",
        side : 0.0,
        className : "circle",
        isTicked : false,
        result : 0.0,
        areaOfCircle: (r) => {
            return (3.14*r*r);
        },
        measurementInstruction: "2.Enter Radius",
        circumferenceOfCircle : (r) => {
            return (2*3.14*r);
        }
    },
    {
        name : "triangle",
        side : 0.0,
        className : "triangle",
        isTicked : true,
        result : 0.0,
        areaOfTriangle : (s) => {
            return (s*s)/2;
        },
        measurementInstruction: "2.Enter Side (Base & Height) ",
        perimeterOfTriangle : (s) => {
            return (s*3);
        }
    },
    {
        name : "square",
        side : 0.0,
        className : "square",
        isTicked : false,
        result : 0.0,
        areaOfSquare : (s) => {
            return (s*s);
        },
        measurementInstruction: "2.Enter Side ",
        perimeterOfSquare : (s) => {
            return (4*s);
        }
    },
    
];

var shapesLength = shapes.length;

var shapeContainer = document.querySelector(".shape-container");

var selectedShapeIndex = 0;

for(i=0;i<shapesLength;i++){
    var child = document.createElement('div');
    child.className = shapes[i].className;
    child.classList.add('shape');
    // shapeContainer.appendChild(child).appendChild('div');
    // shapeContainer.
    if(shapes[i].isTicked==true){
        var appendedChild = shapeContainer.appendChild(child);
        var tickMark = document.createElement('div');
        appendedChild.appendChild(tickMark);
        tickMark.classList.add('tick-mark');
        tickMark.classList.add('align-tick');
        continue;
    }
    shapeContainer.appendChild(child);
}

var shapesList = document.querySelectorAll(".shape-container .shape");

// code for selecting the shapes
shapesList.forEach((val,i) => {
    val.addEventListener("click",(event)=>{
        event.target.innerHTML = "<div class='tick-mark'></div>";
        selectedShapeIndex = i;
        selectedShape = event.target;
        shapesList.forEach((val)=>{
            if(val!=selectedShape){
                val.innerHTML = "";
            }
        });
        shapeName = selectedShape.outerHTML;
        shapeName = shapeName.split("shape")[0].split("=")[1].slice(1).trim();
        if(shapeName=="triangle"){
            shapesList[1].children[0].classList.add("align-tick");
        }
        document.querySelector(".choose-shape-section button").style.visibility = "visible";
        console.log(shapes[selectedShapeIndex].name);
    });
});

// // code for triggering next button click event
// document.querySelector(".next-button").addEventListener("click",(event)=>{
//     let currentSection =  document.querySelector(".calculation-area");
//     currentSection.removeChild(currentSection.childNodes[3]);

//     // changing the input section based on the shape name 
//     if(shapeName=="circle"){
//         document.querySelector(".circle-input-section").style.display = "flex";
//     }else if(shapeName=="triangle"){
//         document.querySelector(".triangle-input-section").style.display = "flex";
//     }else{
//         document.querySelector(".square-input-section").style.display = "flex";
//     }
//     //code for the calculation of the result 

//     var  calculateButtons = document.querySelectorAll(".calculate-button");

//     console.log(calculateButtons);

//     calculateButtons.forEach((btn,i) => {
//         btn.addEventListener("click",(event) => {
//             if(i==1){
//                 [inputValue1,inputValue2] = document.querySelectorAll("input")[i].value.split(" ");
//             }
//             console.log(inputValue1+" "+inputValue2);
//         });
//     });
// });


