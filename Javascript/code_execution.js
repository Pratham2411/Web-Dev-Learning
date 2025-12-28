console.log("Program Start");

/* ---------- SYNCHRONOUS CODE ---------- */
console.log("Sync 1");

let a = 10;
let b = 20;
let c = a + b;
console.log("Sync 2:", c);

console.log("Sync 3");

/* ---------- ASYNCHRONOUS CODE ---------- */
setTimeout(() => {
    console.log("Async 1 (after 2 seconds)");
}, 2000);

setTimeout(() => {
    console.log("Async 2 (after 0 seconds)");
}, 0);

console.log("Program End");
