
let values = [];

function press(value) {
    let display = document.getElementById("digit");

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById("digit").value = "";
}

function deleteLast() {
    let display = document.getElementById("digit");
    display.value = display.value.slice(0, -1);
}

function calculateExpression(expression) {
    if (!/^[0-9+\-*/.()\s]+$/.test(expression)) {
        throw new Error("Invalid expression");
    }

    let answer = Function(
        '"use strict"; return (' + expression + ')'
    )();

    if (!Number.isFinite(answer)) {
        throw new Error("Invalid result");
    }

    return Number(answer.toFixed(10));
}

function calculate() {
    let display = document.getElementById("digit");

    try {
        if (display.value === "") return;

        let answer = calculateExpression(display.value);

        values.push(answer);

        display.value = answer;
    } catch {
        display.value = "Error";
    }
}

function percentage() {
    let display = document.getElementById("digit");

    try {
        if (display.value === "") return;

        let answer = calculateExpression(display.value);
        answer = answer / 100;

        values.push(answer);

        display.value = answer;
    } catch {
        display.value = "Error";
    }
}

function showResults() {
    let result = "<h3>Calculation History</h3>";

    for (let i = 0; i < values.length; i++) {
        result += values[i] + "<br>";
    }

    document.getElementById("output").innerHTML = result;
}




