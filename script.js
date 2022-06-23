// program for a basic arithmetic calculator
let operator = prompt("Enter operator e.g: +, -, *, /, %");
let num1 = parseInt(prompt("Enter First Number"));
let num2 = parseInt(prompt("Enter Second Number"));

let result;

if (operator == '+') {
    result = num1 + num2;
}


else if (operator == '-') {
    result = num1 - num2;
}

else if (operator == '*') {
    result = num1 * num2;
}

else if (operator == '/') {
    result = num1 / num2;
}

else {
    result = num1 % num2;
}

alert(result);