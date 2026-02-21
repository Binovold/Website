const countElement = document.querySelector(".count");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

const max = Number(countElement.dataset.max);
const dateKey = countElement.dataset.date;
const storageKey = `dhikr-${dateKey}`;
let current = Number(localStorage.getItem(storageKey)) || 0;

const upper = document.querySelector(".upper");
const originalContent = upper.innerHTML;
function updateDisplay() {
    countElement.textContent = `${current}/${max}`
    localStorage.setItem(storageKey, current);

    if (current === max) {
        upper.innerHTML = "<h1 id='done'>You're Done</h1>";
    }
    else {
        upper.innerHTML = originalContent;
    }
}

plus.addEventListener("click", () => {
    if (current < max){
        current++;
        updateDisplay();
    }
});

minus.addEventListener("click", function() {
    if (current > 0) {
        current--;
        updateDisplay();
    }
});

reset.addEventListener("click", () => {
    current = 0;
    updateDisplay();
});

updateDisplay();