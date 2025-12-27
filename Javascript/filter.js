let nums = [10, 15, 20, 25, 30];

// function to check even numbers
function isEven(n) {
    return n % 2 === 0;
}

let evenNums = nums.filter(isEven);
console.log(evenNums);


// function to check numbers greater than 20
function greaterThan20(n) {
    return n > 20;
}

let greaterNums = nums.filter(greaterThan20);
console.log(greaterNums);


// function to check odd numbers
function isOdd(n) {
    return n % 2 !== 0;
}

let oddNums = nums.filter(isOdd);
console.log(oddNums);


// filtering strings 
let names = ["Pratham", "Raj", "JS", "Developer"];

function longName(name) {
    return name.length > 3;
}

let longNames = names.filter(longName);
console.log(longNames);
