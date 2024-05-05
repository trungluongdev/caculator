document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const clearButton = document.getElementById("clear");
    const calculateButton = document.getElementById("calculate");
    const operatorButtons = document.querySelectorAll(".operator");
    const numberButtons = document.querySelectorAll(".number");

    let currentInput = "";
    let firstOperand = "";
    let operator = "";
    let secondOperand = "";

    function updateDisplay() {
        display.value = currentInput;
    }

    function clear() {
        currentInput = "";
        firstOperand = "";
        operator = "";
        secondOperand = "";
        updateDisplay();
    }

    function calculate() {
        if (operator && secondOperand) {
            switch (operator) {
                case "+":
                    currentInput = parseFloat(firstOperand) + parseFloat(secondOperand);
                    break;
                case "-":
                    currentInput = parseFloat(firstOperand) - parseFloat(secondOperand);
                    break;
                case "*":
                    currentInput = parseFloat(firstOperand) * parseFloat(secondOperand);
                    break;
                case "/":
                    currentInput = parseFloat(firstOperand) / parseFloat(secondOperand);
                    break;
                default:
                    currentInput = "Error";
                    break;
            }
            firstOperand = currentInput;
            operator = "";
            secondOperand = "";
            updateDisplay();
        }
    }

    numberButtons.forEach(button => {
        button.addEventListener("click", function() {
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (currentInput !== "") {
                if (firstOperand === "") {
                    firstOperand = currentInput;
                } else if (operator !== "") {
                    secondOperand = currentInput;
                    calculate();
                }
                operator = button.textContent;
                currentInput = "";
            }
        });
    });

    clearButton.addEventListener("click", clear);

    calculateButton.addEventListener("click", function() {
        if (firstOperand && operator && currentInput) {
            secondOperand = currentInput;
            calculate();
        }
    });
});
