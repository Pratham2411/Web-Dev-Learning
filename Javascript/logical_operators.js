let age = 20;
let hasID = false;

if (age >= 18 && hasID) {
    console.log("Allowed entry");
}

if (age >= 18 || hasID) {
    console.log("Partial verification passed");
}

if (!hasID) {
    console.log("ID is missing");
}
