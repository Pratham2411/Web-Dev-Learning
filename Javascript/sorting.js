// ===============================
// 1. Sorting numbers (IMPORTANT)
// ===============================

let nums = [10, 5, 40, 25, 2];

// default sort (WRONG for numbers)
nums.sort();
console.log(nums); // [10, 2, 25, 40, 5]

// correct numeric ascending sort
nums.sort((a, b) => a - b);
console.log(nums); // [2, 5, 10, 25, 40]

// numeric descending sort
nums.sort((a, b) => b - a);
console.log(nums); // [40, 25, 10, 5, 2]


// ===============================
// 2. Sorting strings
// ===============================

let names = ["Pratham", "Vinayak", "Gautam", "Madhav"];

// alphabetical ascending
names.sort();
console.log(names);

// alphabetical descending
names.sort().reverse();
console.log(names);


// ===============================
// 3. Sorting strings (case-safe)
// ===============================

let mixed = ["apple", "Banana", "cherry", "Apple"];

// localeCompare handles alphabet rules
mixed.sort((a, b) => a.localeCompare(b));
console.log(mixed);


// ===============================
// 4. Sorting array of objects
// ===============================

let fruits = [
    { name: "Apple", calorie: 52 },
    { name: "Banana", calorie: 89 },
    { name: "Orange", calorie: 47 },
    { name: "Mango", calorie: 60 }
];

// sort by calorie (ascending)
fruits.sort((a, b) => a.calorie - b.calorie);
console.log(fruits);

// sort by calorie (descending)
fruits.sort((a, b) => b.calorie - a.calorie);
console.log(fruits);

// sort by name (alphabetical)
fruits.sort((a, b) => a.name.localeCompare(b.name));
console.log(fruits);


// ===============================
// 5. Custom sorting logic
// ===============================

let numbers = [1, 10, 3, 100, 25];

// sort by last digit
numbers.sort((a, b) => (a % 10) - (b % 10));
console.log(numbers);


// ===============================
// 6. Non-destructive sorting (safe copy)
// ===============================

let original = [30, 10, 20];

// slice creates a copy before sorting
let sortedCopy = original.slice().sort((a, b) => a - b);

console.log(original);    // unchanged
console.log(sortedCopy); // sorted
