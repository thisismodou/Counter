let decreaseButton = document.getElementById('counterMinusButton');
let increaseButton = document.getElementById('counterPlusButton');
let input = document.getElementById('counterField');

decreaseButton.disabled = true;

function increase() {
    input.stepUp(1);
    if (input.value >= 1) {
        decreaseButton.disabled = false;
    }
    if (input.value >= 10) {
        increaseButton.disabled = true;
    }
}

function decrease() {
    input.stepDown(1);
    if (input.value == 1) {
        decreaseButton.disabled = true;
    }
    if (input.value <= 9) {
        increaseButton.disabled = false;
    }
}

function resetToMin() {
    if (input.value < 1) {
        input.value = 1;
    }
}

function resetToMax() {
    if (input.value > 10) {
        input.value = 10;
    }
}

// Disable relative button on 'Keyup' if the Up and Down arrows are used to increase or decrease number
function disableButtons() {
    if (input.value == 1) {
        decreaseButton.disabled = true;
    }else {
        decreaseButton.disabled = false;
    }
    if (input.value == 10) {
        increaseButton.disabled = true;
    }else {
        increaseButton.disabled = false;
    }
}

increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
input.addEventListener('focusout', resetToMax);
input.addEventListener('focusout', resetToMin);
input.addEventListener('focusout', disableButtons);
input.addEventListener('focusout', disableButtons);
input.addEventListener('keyup', disableButtons);

// My first official Github Project 😉