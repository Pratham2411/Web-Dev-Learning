// reduce(callback)
// (total,element) are given parameters 
let numbers = [10, 20, 30, 40];

// function to add two numbers

function add(total, value) {
    return total + value;
}

// sum of all numbers
let sum = numbers.reduce(add,5)
// Note:- if we give a initial value here 
// total=initial value , element =first element
// else total=first element,element =second element
console.log(sum);


// function to find maximum
function findMax(max, value) {
    return value > max ? value : max;
}

// maximum value
let maxValue = numbers.reduce(findMax);
console.log(maxValue);


// function to multiply numbers
function multiply(total, value) {
    return total * value;
}

// product of all numbers
let product = numbers.reduce(multiply, 1);
console.log(product);


// function to join strings
let words = ["JavaScript", "is", "powerful"];

function joinWords(result, word) {
    return result + " " + word;
}

let sentence = words.reduce(joinWords);
console.log(sentence);
