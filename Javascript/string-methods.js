let text = "Hello JavaScript";

// length → gives total number of characters
console.log(`length = ${text.length}`);

// toUpperCase() → converts to uppercase
console.log(`upper = ${text.toUpperCase()}`);

// toLowerCase() → converts to lowercase
console.log(`lower = ${text.toLowerCase()}`);

// charAt() → gives character at index
console.log(`charAt(1) = ${text.charAt(1)}`);

// indexOf() → gives index of first occurrence
console.log(`indexOf('J') = ${text.indexOf("J")}`);

// lastIndexOf() → gives last occurrence index
console.log(`lastIndexOf('a') = ${text.lastIndexOf("a")}`);

// slice() → extracts part of string
console.log(`slice(0, 5) = ${text.slice(0, 5)}`);

// substring() → extracts part of string
console.log(`substring(6, 16) = ${text.substring(6, 16)}`);

// replace() → replaces first match
console.log(`replace = ${text.replace("JavaScript", "JS")}`);

// includes() → checks if string contains value
console.log(`includes('Java') = ${text.includes("Java")}`);

// startsWith() → checks starting characters
console.log(`startsWith('Hello') = ${text.startsWith("Hello")}`);

// endsWith() → checks ending characters
console.log(`endsWith('Script') = ${text.endsWith("Script")}`);

// trim() → removes spaces from start and end
let spaced = "   Hi Pratham   ";
console.log(`trimmed = "${spaced.trim()}"`);

// repeat() → repeats string
console.log(`repeat = ${"Hi ".repeat(3)}`);

// split() → splits string into parts
let word = "JavaScript";
console.log(word.split(""));
