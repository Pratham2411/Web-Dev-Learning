// ...rest is rest parameter
// it bundle seperate elements in an array
// returns average of given numbers
function average(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum / nums.length;
}

console.log(average(10, 20, 30));
console.log(average(5, 15));

// combines given strings into one
function combineStrings(...words) {
    return words.join(" ");
}

console.log(combineStrings("Hello", "Pratham"));
console.log(combineStrings("JavaScript", "is", "awesome"));
