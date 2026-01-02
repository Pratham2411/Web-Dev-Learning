// Async= makes a fn return a promise
// Await= makes a sync fn wait for a promise
// allows to write async code in a sync manner


function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 1 completed");
                resolve(); // no data exposed
            } else {
                reject("Task 1 failed");
            }
        }, 500);
    });
}

function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 2 completed");
                resolve();
            } else {
                reject("Task 2 failed");
            }
        }, 500);
    });
}

function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 3 completed");
                resolve();
            } else {
                reject("Task 3 failed");
            }
        }, 500);
    });
}

function task4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let ok = true;

            if (ok) {
                console.log("Task 4 completed");
                resolve("All tasks done");
            } else {
                reject("Task 4 failed");
            }
        }, 500);
    });
}

async function doChores() {
    try {
        await task1();   // waits, no data printed
        await task2();
        await task3();
        const result = await task4();

        console.log(result);
    } catch (err) {
        console.error("Error:", err);
    }
}

doChores();
