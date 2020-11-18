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
let buttonReset = document.getElementById('buttonReset');

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
buttonComma.value = ".";


let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let operation = document.getElementById("operation");
let buttonsArray = document.querySelectorAll("button");


let result = firstNumber;


buttonsArray.forEach(button => button.onclick = function one(e) {
    e.preventDefault();
    let text1 = "";


    if (button == button) {
        text1 = button.value;
        result.innerHTML += text1;
    }
    console.log(result.innerHTML)

    if (button == buttonDivide) {
        operation.innerHTML = buttonDivide.value = "/";
        result = secondNumber;
        buttonDivide.setAttribute("disabled", "");
    }
    if (button == buttonMultiply) {
        operation.innerHTML = buttonMultiply.value = "x";
        result = secondNumber;
        buttonMultiply.setAttribute("disabled", "");
    }
    if (button == buttonSubstraction) {
        operation.innerHTML = buttonSubstraction.value = "-";
        result = secondNumber;
        buttonSubstraction.setAttribute("disabled", "");
    }
    if (button == buttonAddition) {
        operation.innerHTML = buttonAddition.value = "+";
        result = secondNumber;
        buttonAddition.setAttribute("disabled", "");
        
    }
    if (button == buttonClear) {
        result.innerHTML = "";        
    }

    if (button == buttonReset) {        
        location.reload();
    }
});



buttonEqual.onclick = function three(e) {
    e.preventDefault();
    let imgManip = document.getElementById("img");

    if (imgManip.src.match("genie")) {
        
        imgManip.src = "assets/img/genie2.png";
    };

    if (operation.innerHTML == "/") {
        equal.innerHTML = parseFloat(firstNumber.innerHTML) / parseFloat(secondNumber.innerHTML)
    };

    if (operation.innerHTML == "x") {
        equal.innerHTML = parseFloat(firstNumber.innerHTML) * parseFloat(secondNumber.innerHTML)
    };

    if (operation.innerHTML == "-") {
        equal.innerHTML = parseFloat(firstNumber.innerHTML) - parseFloat(secondNumber.innerHTML)
    };

    if (operation.innerHTML == "+") {
        equal.innerHTML = parseFloat(firstNumber.innerHTML) + parseFloat(secondNumber.innerHTML)
    };

};

