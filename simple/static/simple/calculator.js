const buttonEl = document.querySelectorAll('.buttons button');
const inputfieldEl = document.getElementById('result');

for (let i = 0; i < buttonEl.length; i++) {
    buttonEl[i].addEventListener('click', function() {
        const buttonValue = buttonEl[i].textContent;
        if (buttonValue === 'C') {
            clearResult();
        } else if (buttonValue === '=') {
            calculateResult();
        } else {
            appendValue(buttonValue);
        }
    });
}

function clearResult() {
    inputfieldEl.value = '';
}

function calculateResult() {
    inputfieldEl.value = eval(inputfieldEl.value);
}

function appendValue(buttonValue) {
    inputfieldEl.value += buttonValue;
}