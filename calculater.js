function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSqrt() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sqrt(value);
    } else {
        display.value = 'Error';
    }
}

function calculatePow() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.pow(value, 2);
    } else {
        display.value = 'Error';
    }
}

function calculateSin() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.sin(value * (Math.PI / 180)); // Convert degrees to radians
    } else {
        display.value = 'Error';
    }
}

function calculateCos() {
    const display = document.getElementById('display');
    const value = parseFloat(display.value);
    if (!isNaN(value)) {
        display.value = Math.cos(value * (Math.PI / 180)); // Convert degrees to radians
    } else {
        display.value = 'Error';
    }
}