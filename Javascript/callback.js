// simple callback after greeting
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function done() {
    console.log("Greeting completed");
}

greet("Pratham", done);


// callback with calculation
function calculate(a, b, callback) {
    let result = a + b;
    callback(result);
}

function showResult(value) {
    console.log(`Result is ${value}`);
}

calculate(10, 20, showResult);


// callback based on condition
function checkAge(age, success, failure) {
    if (age >= 18) {
        success();
    } else {
        failure();
    }
}

checkAge(
    20,
    function () {
        console.log("Access granted");
    },
    function () {
        console.log("Access denied");
    }
);


// callback with arrow functions
function processTask(task, callback) {
    console.log(`Task: ${task}`);
    callback();
}

processTask("Learn Callbacks", () => {
    console.log("Task completed");
});
