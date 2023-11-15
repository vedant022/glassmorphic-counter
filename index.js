let countEl = document.getElementById("count"); // Changed to get element by ID

let counts = 0;

function increase() {
    counts++;
    updateCount();
}

function decrease() {
    counts--;
    updateCount();
}

function reset() {
    counts = 0;
    updateCount();
}

function updateCount() {
    countEl.innerHTML = counts;

    if (counts > 0) {
        countEl.style.color = "green";
    } else if (counts < 0) {
        countEl.style.color = "red";
    } else {
        countEl.style.color = "black";
    }
}
