// declaring variables
let a = 10;
let b = 20;

// printing using template literals ($)
console.log(`Value of a is ${a}`);
console.log(`Value of b is ${b}`);

// reassigning value
a = 50;
console.log(`Updated value of a is ${a}`);

// const variable
const pi = 3.14;
console.log(`Value of pi is ${pi}`);
// pi = 4.5; // error: cannot reassign const

// multiple variables in one print
let x = 5;
let y = 15;
console.log(`x = ${x}, y = ${y}`);

// dynamic typing
let data = 100;
console.log(`Data = ${data}, Type = ${typeof data}`);

data = "JavaScript";
console.log(`Data = ${data}, Type = ${typeof data}`);

data = true;
console.log(`Data = ${data}, Type = ${typeof data}`);

// undefined variable
let u;
console.log(`u = ${u}`);

// null value
let n = null;
console.log(`n = ${n}`);

// block scope demonstration (no loops)
if (true) {
    let p = 10;
    const q = 20;
    console.log(`Inside block: p = ${p}, q = ${q}`);
}

// IMPORTANT POINTS / RULES TO REMEMBER
// 1. Use backticks (` `) to use $ for printing values
// 2. ${variable} is used to insert variable value in text
// 3. let allows reassignment, const does not
// 4. JavaScript is dynamically typed
// 5. console.log() is the standard way to print output
