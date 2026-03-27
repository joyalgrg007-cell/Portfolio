let count = 0;

function increase() {
    count++;
    document.getElementById("count").innerText = count;
}

function getValues() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText =
            "Please enter valid numbers!";
        return null;
    }

    return { a, b };
}

function add() {
    let v = getValues();
    if (!v) return;
    document.getElementById("result").innerText = "Result: " + (v.a + v.b);
}

function subtract() {
    let v = getValues();
    if (!v) return;
    document.getElementById("result").innerText = "Result: " + (v.a - v.b);
}

function multiply() {
    let v = getValues();
    if (!v) return;
    document.getElementById("result").innerText = "Result: " + (v.a * v.b);
}