const h = document.getElementById("welcome");

let name = window.prompt("Enter your name");

if (name === null || name.trim() === "") {
    h.textContent = "Welcome, Guest";
} else {
    h.textContent = "Welcome, " + name;
}
