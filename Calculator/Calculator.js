// for the element access
const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');
const historyPanel = document.getElementById('history-panel');
const historyList = document.getElementById('history-list');
const toggleHistoryBtn = document.getElementById('toggle-history');

// defining  some variable
let currentInput = '0';
let previousInput = '';
let memoryValue = 0;
let history = [];

//  for input the number
function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

//  for the oprerator input.
function appendOperator(operator) {
    if (currentInput === '' && previousInput === '') return;
    
    if (currentInput === '') {
        previousInput = previousInput.slice(0, -1) + operator;
        updateDisplay();
        return;
    }

    if (previousInput !== '') {
        compute();
    }

    previousInput = `${currentInput} ${operator}`;
    currentInput = '';
    updateDisplay();
}

// for the clear and delete data
function clearAll() {
    currentInput = '0';
    previousInput = '';
    updateDisplay();
}

function deleteLast() {
    if (currentInput.length <= 1) {
        currentInput = '0';
    } else {
        currentInput = currentInput.slice(0, -1);
    }
    updateDisplay();
}

// for mathmetical work
function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    if (isNaN(prev) || isNaN(current)) return;

    const operator = previousInput.split(' ')[1];

    switch (operator) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '*': computation = prev * current; break;
        case '/': 
            if (current === 0) {
                alert("Cannot divide by zero");
                clearAll();
                return;
            }
            computation = prev / current; 
            break;
        case '**': computation = Math.pow(prev, current); break;
        default: return;
    }

    const record = `${previousInput} ${currentInput} = ${computation}`;
    addHistoryRecord(record);

    currentInput = computation.toString();
    previousInput = '';
    updateDisplay();
}
// to calculating square root value 
function calculateSquareRoot() {
    const current = parseFloat(currentInput);
    if (isNaN(current) || current < 0) {
        alert("Invalid Input for Square Root");
        return;
    }
    
    const result = Math.sqrt(current);
    addHistoryRecord(`√(${current}) = ${result}`);
    currentInput = result.toString();
    updateDisplay();
}

// for display update
function updateDisplay() {
    currentDisplay.innerText = currentInput;
    previousDisplay.innerText = previousInput;
}

//  fot the memoryfeature
function memoryAdd() {
    memoryValue += parseFloat(currentInput) || 0;
    alert(`Added to memory. Current Memory: ${memoryValue}`);
}

function memoryMinus() {
    memoryValue -= parseFloat(currentInput) || 0;
    alert(`Removed form memory Current Memory: ${memoryValue}`);
}

function memoryRecall() {
    currentInput = memoryValue.toString();
    updateDisplay();
}

function memoryClear() {
    memoryValue = 0;
    alert("Memory saaf ho gaya");
}

// to manage the history
function addHistoryRecord(record) {
    history.push(record);
    const li = document.createElement('li');
    li.innerText = record;
    historyList.appendChild(li);
}

function clearHistory() {
    history = [];
    historyList.innerHTML = '';
}

//  to view the history panel
function toggleHistoryView() {
    historyPanel.classList.toggle('hidden');
}
toggleHistoryBtn.addEventListener('click', toggleHistoryView);


