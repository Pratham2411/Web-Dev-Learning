let correctUsername = "Pratham";
let correctPassword = "2411";

let username = "";
let password = "";

while (username !== correctUsername || password !== correctPassword) {
    username = window.prompt("Enter username:");
    password = window.prompt("Enter password:");
}

console.log("Login successful");
