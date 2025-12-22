// Math.PI gives the value of pi
let pi = Math.PI;
console.log(`PI = ${pi}`);

// Math.round() rounds to nearest integer
let a = 4.6;
console.log(`round(4.6) = ${Math.round(a)}`);

// Math.floor() rounds down
let b = 4.9;
console.log(`floor(4.9) = ${Math.floor(b)}`);

// Math.ceil() rounds up
let c = 4.1;
console.log(`ceil(4.1) = ${Math.ceil(c)}`);

// Math.trunc() removes decimal part
let d = 4.9;
console.log(`trunc(4.9) = ${Math.trunc(d)}`);

// Math.pow() calculates power
let e = 2;
let f = 3;
console.log(`2^3 = ${Math.pow(e, f)}`);

// Math.sqrt() calculates square root
let g = 25;
console.log(`sqrt(25) = ${Math.sqrt(g)}`);

// Math.abs() gives absolute value
let h = -15;
console.log(`abs(-15) = ${Math.abs(h)}`);

// Math.max() finds largest value
let x = 10;
let y = 25;
let z = 7;
console.log(`max = ${Math.max(x, y, z)}`);

// Math.min() finds smallest value
console.log(`min = ${Math.min(x, y, z)}`);

// Math.random() generates random number between 0 and 1
let r = Math.random();
console.log(`random = ${r}`);

// Random number between 1 and 10
let rand = Math.floor(Math.random() * 10) + 1;
console.log(`random 1-10 = ${rand}`);
