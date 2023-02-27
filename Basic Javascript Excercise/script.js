// Section 1 : Play with variables

console.log("<----- Section 1 : Play with variables ----->");
console.log(1+2); // 3
console.log("apple"+"orange"); // appleorange
console.log(1+2+"apple"); //3apple
console.log("apple"+1+2); //apple12
console.log(1+true); //2
console.log(0==false); //true
console.log(1===true); //false
console.log(2=="2"); //true

//Section 2 : Play with arrays 

console.log("<----- Section 2 : Play with arrays ----->");
// creating an array with a name of 10 cricket players
cricketPlayers = ["Watson","Faf","Rayudu","Raina","Dhoni","Jadeja","Bravo","Morkel","Tahir","Ashwin","Chahar"];

// because of the injury the first player is being removed
cricketPlayers.shift();

// finding the number of players remaining
console.log(cricketPlayers.length);

// adding another player to the top of the list 
cricketPlayers.unshift("Hussey");

// for the players need to get photograph we need to sort them in order
cricketPlayers.sort();
console.log(cricketPlayers);

// assigning a randomjersy number to the individual players
cricketPlayers.forEach((value,index,array)=> {
   console.log(value+"-"+Math.round(Math.random()*1000));
    array[index]=value+"-"+Math.round(Math.random()*1000);
});

// printing in uppercase and storing it in different place
printingJersy = [];
cricketPlayers.forEach((val)=> {
    printingJersy.push(val.toUpperCase());
});
console.log(printingJersy);

console.log("<----- Section 3 : Play with functions ----->")

// display 1 to 100
function displayNumbers() {
    let numbers = "";
    for(let i=1;i<=100;i++){
        numbers+=(i+" ");
    }
    console.log(numbers);
}
displayNumbers();


// display date in dd/mm/yyyy
formatedDate = "";
date = new Date();
date = date.toISOString();
month = date.slice(5,7)
day = date.slice(8,10);
year = date.slice(0,4);
formatedDate = day+"/"+month+"/"+year;
console.log(formatedDate);

// celcius to faranheit 
function celciusToFaranheit(celcius) {
    return (celcius*1.8)+32;
}
console.log(celciusToFaranheit(45));

// finding average of numbers 
function computeAverage(numbers){
    let total = 0;
    let len = arr.length;
    for(i=0;i<len;i++){
        total+=numbers[i];
    }
    return total/len;
}
var numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(computeAverage(numbers));

// function to reverse a string
function reverseTheString(str){
    let reversedString = "";
    for(i=str.length-1;i>=0;i--){
        reversedString+=str[i];
    }
    return reversedString;
}
console.log(reverseTheString("Hello World!"));





