// Section 1 : Play with variables

console.log("<----- Section 1 : Play with variables ----->")
console.log(1+2); // 3
console.log("apple"+"orange"); // appleorange
console.log(1+2+"apple"); //3apple
console.log("apple"+1+2); //apple12
console.log(1+true); //2
console.log(0==false); //true
console.log(1==true); //true
console.log(2=="2"); //true

//Section 2 : Play with arrays 

console.log("<----- Section 2 : Play with arrays ----->")
// creating an array with a name of 10 cricket players
cricketPlayers = ["Watson","Faf","Rayudu","Raina","Dhoni","Jadeja","Bravo","Morkel","Tahir","Ashwin","Chahar"]

// because of the injury the first player is being removed
cricketPlayers.shift()

// finding the number of players remaining
console.log(cricketPlayers.length)

// adding another player to the top of the list 
cricketPlayers.unshift("Hussey");

// for the players need to get photograph we need to sort them in order
cricketPlayers.sort();
console.log(cricketPlayers);

// assigning a randomjersy number to the individual players
cricketPlayers.forEach((val,i,a)=> {
    console.log(val+"-"+Math.round(Math.random()*1000));
    a[i]=val+"-"+Math.round(Math.random()*1000);
});

// printing in uppercase and storing it in different place
printingJersy = []
cricketPlayers.forEach((val)=> {
    printingJersy.push(val.toUpperCase());
});
console.log(printingJersy);

console.log("<----- Section 3 : Play with functions ----->")

// display 1 to 100
function displayNumbers() {
    numbers = "";
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





