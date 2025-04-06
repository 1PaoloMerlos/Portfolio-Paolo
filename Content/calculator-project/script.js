$(document).ready(function() {
    let display = document.getElementById('display');
    let currentOperation = '';
    let firstOperand = '';
    let secondOperand = '';

    function appendNumber (number) {
        display.value += number;
    }

    function performOperation(operation) {
        firstOperand = display.value;
        currentOperation = operation;
        display.value = '';
    }

    function calculateResult() {
        
        secondOperand = display.value;
    }

    function clearDisplay() {
        display.value = '';
        firstOperand = '';
        secondOperand = '';
        currentOperation = '';
    }

    function isNumber(value) {
        return !isNaN(value);
    }



    $('button').click(function() {
        const elementValue = $('button').val(); 

        if (isNumber(elementValue)) {
            console.log('The element contains a number.');

        } else {
            console.log('The element does not contain a number.');
        }
    });

});