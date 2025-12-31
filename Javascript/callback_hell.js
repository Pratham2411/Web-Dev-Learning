/*
CALLBACKS IN JAVASCRIPT – FULL EXPLANATION IN ONE CODE

A callback is simply a function that is:
1) Passed as an argument to another function
2) Called later (after some work is done)

Why callbacks exist:
- JavaScript is single-threaded
- Some operations take time (API calls, timers, file reading)
- Callbacks let JS continue execution and handle results later
*/

// ---------------- BASIC CALLBACK ----------------
function greet(name, cb) {
    console.log("Hello", name);     // normal execution
    cb();                           // calling the callback
}

function afterGreeting() {
    console.log("Greeting finished");
}

greet("Pratham", afterGreeting);

// ---------------- CALLBACK WITH DATA ----------------
function add(a, b, cb) {
    let sum = a + b;
    cb(sum);                        // passing result to callback
}

add(10, 20, function(result) {
    console.log("Sum is:", result);
});

// ---------------- ASYNCHRONOUS CALLBACK ----------------
function fetchData(cb) {
    console.log("Fetching data...");

    // setTimeout simulates async operation (API / DB / File)
    setTimeout(() => {
        let data = "Server Data";
        cb(data);                   // callback runs AFTER delay
    }, 1000);
}

fetchData(function(res) {
    console.log("Received:", res);
});

// ---------------- SUCCESS / ERROR CALLBACK ----------------
function divide(a, b, success, error) {
    if (b === 0) {
        error("Division by zero not allowed");
    } else {
        success(a / b);
    }
}

divide(
    10,
    2,
    ans => console.log("Answer:", ans),
    err => console.log("Error:", err)
);

// ---------------- CALLBACK HELL (WHY CALLBACKS CAN BE BAD) ----------------
function step1(cb) {
    setTimeout(() => {
        console.log("Step 1 done");
        cb();
    }, 500);
}

function step2(cb) {
    setTimeout(() => {
        console.log("Step 2 done");
        cb();
    }, 500);
}

function step3(cb) {
    setTimeout(() => {
        console.log("Step 3 done");
        cb();
    }, 500);
}

// Nested callbacks → hard to read, hard to maintain
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps completed");
        });
    });
});

