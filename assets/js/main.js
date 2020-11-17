let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");
let button0 = document.getElementById("button0");
let buttonClear = document.getElementById("buttonClear");
let buttonDivide = document.getElementById("buttonDivide");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonSubstraction = document.getElementById("buttonSubstraction");
let buttonAddition = document.getElementById("buttonAddition");
let buttonComma = document.getElementById("buttonComma");
let buttonEqual = document.getElementById("buttonEqual");

button1.value = 1;
button2.value = 2;
button3.value = 3;
button4.value = 4;
button5.value = 5;
button6.value = 6;
button7.value = 7;
button8.value = 8;
button9.value = 9;
button0.value = 0;
buttonComma.value = ",";

// buttonDivide.value = "/";
// buttonMultiply.value = "*";
// buttonSubstraction.value = "-";
// buttonAddition.value = "+";


// premier chiffre
let firstNumber = document.getElementById("firstNumber");
let secondtNumber = document.getElementById("secondNumber");
let operation = document.getElementById("operation");
let buttonsArray = document.querySelectorAll("button");
let result = document.getElementById("result");


buttonsArray.forEach(button => button.onclick = function one(e) {
    e.preventDefault();
    let text1 = "";
    text1 = button.value;
    screen.innerHTML += text1;

});

// deuxieme chiffre
buttonsArray.forEach(button => button.onclick = function two(e) { 
    e.preventDefault();
    let text2 = "";    
    text2 = button.value;
    secondNumber.innerHTML += text2;
});

//le signe
buttonsArray.forEach(button => button.onclick = function three(e) { 
    e.preventDefault();
    let text3 = ""; 
    if (button == buttonDivide)   {
        operation.innerHTML = text3 = "/";
    }
    if (button == buttonMultiply)   {
        operation.innerHTML = text3 = "x";
    }
    if (button == buttonSubstraction)   {
        operation.innerHTML = text3 = "-";
    }
    if (button == buttonAddition)   {
        operation.innerHTML = text3 = "+";
    }
});


buttonEqual.onclick = function four(e) {
    e.preventDefault();
if (operation.value == "/") {result.innerHTML = Number(firstNumber.value / secondNumber.value)};

if (operation.value == "x") {result.innerHTML = Number(firstNumber.value * secondNumber.value)};

if (operation.value == "-") {result.innerHTML = Number(firstNumber.value - secondNumber.value)};

if (operation.value == "+") {result.innerHTML = Number(firstNumber.value + secondNumber.value)};

};
