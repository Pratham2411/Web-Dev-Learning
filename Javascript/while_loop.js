let correctUsername = "Pratham";
let correctPassword = "2411";

let loggedIn = false;
 let username;
 let password;
while (!loggedIn) {
    username = window.prompt("Enter username:");
    password = window.prompt("Enter password:");
    if (username === correctUsername && password===correctPassword) {
        loggedIn = true;
       console.log("Login successful");
        
    }
    else{
        console.log("Invalid credentials");
    }
}
