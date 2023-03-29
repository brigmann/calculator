let num1 = parseInt(prompt("Enter first number: "));
let op = prompt("Enter operator (+, -, *, /): ");
let num2 = parseInt(prompt("Enter second number: "));

let result;

switch (op) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        alert("Invalid operator");
        break;
}

if (result !== undefined) {
    alert(num1 + " " + op + " " + num2 + " = " + result);
}
