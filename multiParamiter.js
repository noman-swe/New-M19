function addTwoNumbers (num1, num2){
    // console.log(num1, num2);
    var total = num1 + num2;
    return total;
}

var firstNumber = 49;
var secondNumber = 81;

addTwoNumbers(firstNumber, secondNumber);

var addition = addTwoNumbers(firstNumber, secondNumber);
console.log(addition);

function multiplyTwoNums (num1, num2){
    var result = num1 * num2;
    return result;
}
var multiply = multiplyTwoNums(firstNumber, secondNumber);
console.log('Multiply result :',multiply);

function minusTwoNum(num1, num2){
    var result = num1 - num2;
    return result;
}
var minus = minusTwoNum(secondNumber, firstNumber);
console.log(minus);

function divideTwoNumbers(num1, num2){
    var result = num1 / num2;
    return result;
}
var divide = divideTwoNumbers(firstNumber, secondNumber);
console.log(divide);