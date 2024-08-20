const input = document.querySelector('.input');
const buttons = document.querySelectorAll('.button');
const operators = ['+', '-', 'x', '/', '%'];

let currentInput = '';
let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';


buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        
        if (value === 'AC') {
            currentInput = '';
            operator = '';
            firstNumber = '';
            secondNumber = '';
            result = '';
            input.value = '0';
            return;
        }

   
        if (operators.includes(value)) {
            if (currentInput && !operator) {
                operator = value;
                firstNumber = currentInput;
                currentInput = '';
            }
            return;
        }

     
        if (value === '=') {
            if (firstNumber && operator && currentInput) {
                secondNumber = currentInput;
                calculate();
                input.value = result;
                currentInput = result;
                firstNumber = '';
                operator = '';
            }
            return;
        }

       
        if (value === '.' && currentInput.includes('.')) return;

        currentInput += value;
        input.value = currentInput;
    });
});


function calculate() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            result = '';
    }
}
