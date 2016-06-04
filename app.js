var a = parseInt(prompt("Enter a first Number", "8"));
var b = parseInt(prompt("Enter a second Number", "5"));
var c = prompt("Enter a Operator", "+,-,*,/");
function calc(num1, num2, operator) {
    var num1;
    var num2;
    var operator;
    if (operator == "+") {
        var result = num1 + num2;
    }
    else if (operator == "-") {
        var result = num1 - num2;
    }
    else if (operator == "*") {
        var result = num1 * num2;
    }
    else if (operator == "/") {
        var result = num1 / num2;
    }
    else {
        alert("invalid input");
    }
    return result;
}
alert(a + " " + c + " " + b + " is " + calc(a, b, c));
