let radius;
const pi = 3.14159;

document.getElementById("mySubmit").onclick = function () {
    radius = Number(document.getElementById("myText").value);
    let circumference = 2 * pi * radius;
    document.getElementById("myh2").textContent =
        `Circumference = ${circumference}` cm;
};

