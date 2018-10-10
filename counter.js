let decreaseButton = document.getElementById('counterMinusButton');
let increaseButton = document.getElementById('counterPlusButton');
let input = document.getElementById('counterField');

function increase() {
    input.stepUp(1);
}

function decrease() {
    input.stepDown(1);
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

increaseButton.addEventListener('click', increase);
decreaseButton.addEventListener('click', decrease);
input.addEventListener('focusout', resetToMax);
input.addEventListener('focusout', resetToMin);

// My first official Github Project