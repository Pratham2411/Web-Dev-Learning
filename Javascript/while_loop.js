let correctUsername = "Pratham";
let correctPassword = "2411";

let username = window.prompt("Enter username:");

if (username === correctUsername) {
    let password = window.prompt("Enter password:");

    if (password === correctPassword) {
        console.log("Login successful");
    } else {
        console.log("Invalid credentials");
    }
} else {
    console.log("Invalid credentials");
}
