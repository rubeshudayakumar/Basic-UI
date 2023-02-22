calculator = {
    add: function(num1,num2) {
        return num1+num2;
    },
    sub: function(num1,num2) {
        return num1-num2;
    },
    mul: function(num1,num2){
        return num1*num2;
    },
    div: function(num1,num2){
        return num1/num2;
    }
}

a = window.prompt("Enter number 1 : ");
b = window.prompt("Enter number 2 : ");

console.log("Addition of "+a+" "+b+" : "+calculator.add(a,b));
console.log("Subtraction of "+a+" "+b+" : "+calculator.sub(a,b));
console.log("Multiplication of "+a+" "+b+" : "+calculator.mul(a,b));
console.log("Division of "+a+" "+b+" : "+calculator.div(a,b));
