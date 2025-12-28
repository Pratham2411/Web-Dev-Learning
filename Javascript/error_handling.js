try {
    let a = window.prompt("Enter dividend");
    let b = window.prompt("Enter divisor");

    a = Number(a);
    b = Number(b);

    if (isNaN(a) || isNaN(b)) {
        throw new Error("Input must be a number");
    }

    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }

    let result = a / b;
    console.log("Result:", result);
}
catch (err) {
    console.error("Error:", err.message);
}
finally {
    console.log("Calculation attempt finished");
}
