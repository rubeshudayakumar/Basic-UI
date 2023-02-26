// creating shapes object

var shapes = [
    {
        name : "Circle",
        side : 0.0,
        className : "circle",
        isTicked : true,
        result : 0.0,
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
        isTicked : false,
        result : 0.0,
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
        isTicked : false,
        result : 0.0,
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

var shapesLength = shapes.length;

var shapeContainer = document.querySelector(".shape-container");

var selectedShapeIndex = 0;

function renderShapeSelectionSection(){
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
}

renderShapeSelectionSection();

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

// code for triggering next button click event
document.querySelector(".next-button").addEventListener("click",(event)=>{

    //removing the select shape section
    let currentSection =  document.querySelector(".calculation-area");
    currentSection.removeChild(currentSection.childNodes[3]);

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
        shapes[selectedShapeIndex].side = parseFloat(document.querySelector(".entry-value").value);
        document.querySelector(".calculation-area").innerHTML = "";

        calculationSection = document.querySelector(".calculation-area").appendChild(document.createElement("section"));
        calculationSection.classList.add("choose-shape-section"); 

        //creating output shape
        outputShape = calculationSection.appendChild(document.createElement("div"));   
        outputShape.classList.add(shapes[selectedShapeIndex].className);

        //creating shape name
        shapeName = calculationSection.appendChild(document.createElement("h2"));
        shapeName.classList.add("enter-measurement-instruction");
        shapeName.innerHTML = shapes[selectedShapeIndex].name;

        // creating shape output container
        shapeOutput = calculationSection.appendChild(document.createElement("div"));
        shapeOutput.classList.add("shape-output-container");

        //creating output array
        var outputArray = [
            ["SIDE",shapes[selectedShapeIndex].sideSymbol,shapes[selectedShapeIndex].side+" cm"],
            ["AREA",shapes[selectedShapeIndex].areaFormula.formula,shapes[selectedShapeIndex].area(shapes[selectedShapeIndex].side).toString()+" "+shapes[selectedShapeIndex].areaFormula.unit],
            [shapes[selectedShapeIndex].perimeterFormula.propertyName,shapes[selectedShapeIndex].perimeterFormula.formula,shapes[selectedShapeIndex].perimeter(shapes[selectedShapeIndex].side).toString()+" "+shapes[selectedShapeIndex].perimeterFormula.unit],
        ];

        // creating output rows and columns
        for(var i=0;i<3;i++){
            row = shapeOutput.appendChild(document.createElement("div"));
            row.classList.add("shape-output-row");

            for(var j=0;j<3;j++){
                col = row.appendChild(document.createElement("div"));
                col.classList.add("cell");
                if(j==0) col.classList.add("first-cell");
                if(j==1) col.classList.add("middle-cell");
                if(j==2) col.classList.add("last-cell");
                col.innerHTML = outputArray[i][j];
            }
        }

        // creating start again button 
        startAgainButton =  calculationSection.appendChild(document.createElement("button"));
        startAgainButton.classList.add("start-again-button");
        startAgainButton.innerHTML = "START AGAIN";

        // event listener for start again button
        startAgainButton.addEventListener("click",(event)=>{
            document.querySelector(".calculation-area").innerHTML = "";
            document.querySelector(".calculation-area").appendChild(shapeContainer);
        });

    });

});






