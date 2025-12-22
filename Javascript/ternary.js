// basic ternary operator
let age = 20;

let result = (age >= 18) ? "Adult" : "Minor";
console.log(result);

// ternary with numbers
let a = 10;
let b = 25;

let max = (a > b) ? a : b;
console.log(`Max value is ${max}`);

// ternary with boolean
let isLoggedIn = true;

let message = (isLoggedIn) ? "Welcome back" : "Please log in";
console.log(message);

// ternary with calculation
let marks = 72;

let status = (marks >= 40) ? "Pass" : "Fail";
console.log(status);

// ternary with input-like value
let num = -5;

let sign = (num >= 0) ? "Positive" : "Negative";
console.log(sign);
