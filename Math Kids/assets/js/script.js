// creating shapes object
var shapes = [
    {
        name : "Circle",
        side : 0.0,
        className : "circle",
        area: (r) => {
            return (3.14*r*r);
        },
        measurementInstruction: "2.Enter Radius",
        perimeter : (r) => {
            return (2*3.14*r);
        },
        sideSymbol : "r",
        areaFormula : {
           formula:  "&pi; * r * r",
           unit: "sq cm"
        },
        perimeterFormula : {
            formula : "2 * &pi; * r",
            propertyName : "CIRCUMFERENCE",
            unit: "cm",
        },
    },
    {
        name : "Equilateral Triangle",
        side : 0.0,
        className : "triangle",
        area : (s) => {
            return (s*s)/2;
        },
        measurementInstruction: "2.Enter Side (Base & Height) ",
        perimeter : (s) => {
            return (s*3);
        },
        sideSymbol : "s",
        areaFormula : {
           formula:  "0.433 * s * s",
           unit: "sq cm"
        },
        perimeterFormula : {
            formula : "3*s",
            propertyName : "PERIMETER",
            unit: "cm",
        },
    },
    {
        name : "Square",
        side : 0.0,
        className : "square",
        area : (s) => {
            return (s*s);
        },
        measurementInstruction: "2.Enter Side ",
        perimeter : (s) => {
            return (4*s);
        },
        sideSymbol: "a",
        areaFormula : {
            formula:  "a * a",
            unit: "sq cm"
        },
        perimeterFormula : {
            formula : "4 * a",
            propertyName : "PERIMETER",
            unit: "cm",
        },
    },
    
];

// length of the object 
var shapesLength = shapes.length;

// declaring global html object to reuse when start again button is clicked
var shapeSection = "";

if(localStorage.getItem("shapeIndex")==null){
    localStorage.setItem("shapeIndex", 0);
}

// defining the choose shape section (section - 1: choose a shape)
function renderShapeSelectionSection(){

    // adding parent container 
    var shapeSection = document.querySelector(".calculation-area").appendChild(document.createElement("section"));
    shapeSection.classList.add("choose-shape-section");
    
    // adding children like h2 and shape container to the parent
    var heading = shapeSection.appendChild(document.createElement("h2"));
    heading.innerHTML = "1. Choose a Shape";
    
    // adding shape container to the parent 
    var shapeContainer = shapeSection.appendChild(document.createElement("div"));
    shapeContainer.classList.add("shape-container");

    // adding shapes one by one with the help of the for loop
    for(i=0;i<shapesLength;i++){
        let child = document.createElement('div');
        child.className = shapes[i].className;
        child.classList.add('shape');//
        if(i==localStorage.getItem("shapeIndex")){
            let appendedChild = shapeContainer.appendChild(child);
            let tickMark = document.createElement('div');
            appendedChild.appendChild(tickMark);
            tickMark.classList.add('tick-mark');
            if(shapes[i].className=="triangle") tickMark.classList.add('align-tick');
        }
        shapeContainer.appendChild(child);
    }

    // adding the next button below the shape container
    let nextButton = shapeSection.appendChild(document.createElement("button"));
    nextButton.innerHTML = "NEXT";
    nextButton.classList.add("next-button");

    // selecting all the shapes
    let shapesList = document.querySelectorAll(".shape-container .shape");

    // adding individiual event listeners for selecting the shapes
    shapesList.forEach((shape,i) => {
        shape.addEventListener("click",(event)=>{

            // marking the tick to the selected shape
            event.target.innerHTML = "<div class='tick-mark'></div>";
            localStorage.setItem("shapeIndex",i);
            selectedShape = event.target;

            // unmarking the ticks to the unselected shape
            shapesList.forEach((shape)=>{
                if(shape!=selectedShape){
                    shape.innerHTML = "";
                }
            });
            shapeName = selectedShape.outerHTML;
            shapeName = shapeName.split("shape")[0].split("=")[1].slice(1).trim();
            if(shapeName=="triangle"){
                shapesList[1].children[0].classList.add("align-tick");
            }//

            // setting the button to visible after the shape has been selected
            document.querySelector(".choose-shape-section button").style.visibility = "visible";
            // console.log(shapes[selectedShapeIndex].name);
        });
    });
    // code for triggering next button click event
    document.querySelector(".next-button").addEventListener("click",(event)=>{

        let selectedShapeIndex = localStorage.getItem("shapeIndex");

        //removing the select shape section
        let currentSection =  document.querySelector(".calculation-area");
        currentSection.innerHTML = "";

        //creating step 2 (calculation section)
        let calculationArea = document.querySelector(".calculation-area");
        let inputSectionElement = document.createElement("section");
        let inputSection = calculationArea.appendChild(inputSectionElement);
        inputSection.classList.add("input-section");

        // creating input instruction
        let createElementInstruction = document.createElement("h2");
        createElementInstruction.innerHTML = shapes[selectedShapeIndex].measurementInstruction;
        let instruction = inputSection.appendChild(createElementInstruction);
        instruction.className = "enter-measurement-instruction";
        
        // creating a input field
        let inputField = inputSection.appendChild(document.createElement("input"));
        inputField.className = "entry-value";
        inputField.type = "text";
        
        // creating calculate button 
        let calculateBtn = inputSection.appendChild(document.createElement("button"));
        calculateBtn.className = "calculate-button";
        calculateBtn.innerHTML = "CALCULATE";  

        // adding click event listener for calculate button
        document.querySelector(".calculate-button").addEventListener("click",(event) => {
            // storing the input value to the particular selected shape before removing the (section-2 : Enter Side)
            shapes[selectedShapeIndex].side = parseFloat(document.querySelector(".entry-value").value);

            // removing the (section-2 : )
            document.querySelector(".calculation-area").innerHTML = "";

            let calculationSection = document.querySelector(".calculation-area").appendChild(document.createElement("section"));
            calculationSection.classList.add("choose-shape-section"); 

            //creating output shape
            let outputShape = calculationSection.appendChild(document.createElement("div"));   
            outputShape.classList.add(shapes[selectedShapeIndex].className);

            //creating shape name
            let shapeName = calculationSection.appendChild(document.createElement("h2"));
            shapeName.classList.add("enter-measurement-instruction");
            shapeName.innerHTML = shapes[selectedShapeIndex].name;

            // creating shape output container
            let shapeOutput = calculationSection.appendChild(document.createElement("div"));
            shapeOutput.classList.add("shape-output-container");

            //creating output array
            let outputArray = [
                ["SIDE",shapes[selectedShapeIndex].sideSymbol,shapes[selectedShapeIndex].side+" cm"],
                ["AREA",shapes[selectedShapeIndex].areaFormula.formula,shapes[selectedShapeIndex].area(shapes[selectedShapeIndex].side).toFixed(2).toString()+" "+shapes[selectedShapeIndex].areaFormula.unit],
                [shapes[selectedShapeIndex].perimeterFormula.propertyName,shapes[selectedShapeIndex].perimeterFormula.formula,shapes[selectedShapeIndex].perimeter(shapes[localStorage.getItem("shapeIndex")].side).toFixed(2).toString()+" "+shapes[localStorage.getItem("shapeIndex")].perimeterFormula.unit],
            ];

            // creating output rows and columns
            for(let i=0;i<3;i++){
                row = shapeOutput.appendChild(document.createElement("div"));
                row.classList.add("shape-output-row");

                for(let j=0;j<3;j++){
                    col = row.appendChild(document.createElement("div"));
                    col.classList.add("cell");
                    if(j==0) col.classList.add("first-cell");
                    if(j==1) col.classList.add("middle-cell");
                    if(j==2) col.classList.add("last-cell");
                    col.innerHTML = outputArray[i][j];
                }
            }

            // creating start again button 
            let startAgainButton =  calculationSection.appendChild(document.createElement("button"));
            startAgainButton.classList.add("start-again-button");
            startAgainButton.innerHTML = "START AGAIN";

            // event listener for start again button
            startAgainButton.addEventListener("click",(event)=>{
                document.querySelector(".calculation-area").innerHTML = "";
                renderShapeSelectionSection();
            });

        });

    });
}

// calling the function for the (section 1 : choose a shape)
renderShapeSelectionSection();







