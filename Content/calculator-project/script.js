$(document).ready(function() {
    let display = document.getElementById('display');
    let operator = document.getElementById('operator');
    let firstNumber = '';
    let secondNumber = '';
    let equals = false;
    let calcCount = 0;

    $('equals').click(function() { 
        equals = true;
    })

    $('button').click(function() {
       var element = $(this).text(); 

        if (this.id === "operator") { elementOperator = $(this).text(); calcCount++;} 
        if (this.id === "equals") {  
            result = applyOperator(firstNumber, elementOperator, secondNumber);
            display.innerHTML = result;
            calcCount = 0;  }
        else { element = parseInt($(this).text()); }
        
        if (calcCount === 0) { 
            firstNumber = element; 
            display.innerHTML = firstNumber; 
            calcCount++;
            //operator.innerHTML = elementOperator; 
        } else if (calcCount === 1) { 
            secondNumber = element; 
            display.innerHTML = secondNumber; 
           // operator.innerHTML = elementOperator; 
            calcCount= 0;
        } 

        console.log('Element value:', element); 

        function applyOperator(a, op, b) { 
            switch(op) {
                case '+': return a + b;
                case '-': return a - b;
                case '*': return a * b;
                case '/': return a / b;
                case '%': return a % b;
                default: return NaN;
              }
        }

    })

$('#clear').click(function() {
    firstNumber = '';
    secondNumber = '';
    operator.innerHTML = '';
    display.innerHTML = '0';
})

    


  

    });

