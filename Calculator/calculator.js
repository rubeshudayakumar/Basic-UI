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

console.log("Addition of  : "+calculator.add(89,19));
console.log("Subtraction of  : "+calculator.sub(89,19));
console.log("Multiplication of  : "+calculator.mul(89,19));
console.log("Division of  : "+calculator.div(89,19));
