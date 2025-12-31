/*
PROMISES WITH RESOLVE & REJECT USING IF-ELSE
TASKS EXECUTED STRICTLY IN ORDER
*/

function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 1 completed");
                resolve("Data from task 1");
            } else {
                reject("Task 1 failed");
            }
        }, 500);
    });
}

function task2(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 2 completed using:", data);
                resolve("Data from task 2");
            } else {
                reject("Task 2 failed");
            }
        }, 500);
    });
}

function task3(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 3 completed using:", data);
                resolve("Data from task 3");
            } else {
                reject("Task 3 failed");
            }
        }, 500);
    });
}

function task4(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 4 completed using:", data);
                resolve("All tasks done");
            } else {
                reject("Task 4 failed");
            }
        }, 500);
    });
}

task1()
    .then(r1 => task2(r1))
    .then(r2 => task3(r2))
    .then(r3 => task4(r3))
    .then(res => console.log(res))
    .catch(err => console.log("Error:", err))
    .finally(() => console.log("Execution finished"));
