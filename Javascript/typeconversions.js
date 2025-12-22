// let age=window.prompt("How old are you?");
// age=Number(age);
// age+=1;
// console.log(age,typeof age);

// STRING TO NUMBER (explicit conversion)
let a = "10";
let numA = Number(a);

console.log(`a = ${a}, type = ${typeof a}`);
console.log(`numA = ${numA}, type = ${typeof numA}`);

// NUMBER TO STRING
let b = 25;
let strB = String(b);

console.log(`b = ${b}, type = ${typeof b}`);
console.log(`strB = ${strB}, type = ${typeof strB}`);

// BOOLEAN TO NUMBER
let isTrue = true;
let numBool = Number(isTrue);

console.log(`isTrue = ${isTrue}, type = ${typeof isTrue}`);
console.log(`numBool = ${numBool}, type = ${typeof numBool}`);

// STRING TO BOOLEAN
let text = "hello";
let boolText = Boolean(text);

console.log(`text = ${text}, type = ${typeof text}`);
console.log(`boolText = ${boolText}, type = ${typeof boolText}`);

// EMPTY STRING TO BOOLEAN
let empty = "";
let boolEmpty = Boolean(empty);

console.log(`empty = "${empty}", type = ${typeof empty}`);
console.log(`boolEmpty = ${boolEmpty}, type = ${typeof boolEmpty}`);

// STRING TO NUMBER (invalid case)
let x = "abc";
let numX = Number(x);

console.log(`x = ${x}`);
console.log(`numX = ${numX}`); // NaN

// IMPLICIT TYPE CONVERSION (automatic)
let m = "5";
let n = 2;

console.log(`"5" + 2 = ${m + n}`); // string concatenation
console.log(`"5" - 2 = ${m - n}`); // number subtraction
console.log(`"5" * 2 = ${m * n}`); // number multiplication


