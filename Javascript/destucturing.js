// 1. swap two values using destructuring
let a = 10;
let b = 20;

[a, b] = [b, a];
console.log(a, b);


// 2. swap two array elements
let arr = [1, 2, 3, 4];

[arr[0], arr[3]] = [arr[3], arr[0]];
console.log(arr);


// 3. assign array elements to variables using rest (...)
let nums = [10, 20, 30, 40, 50];

let [x, y, z, ...rest] = nums;
console.log(x, y, z);
console.log(rest);


// 4. extract values from objects
let person = {
    name: "Pratham",
    age: 21,
    city: "Patna"
};

let { name, age } = person;
console.log(name, age);


// 5. destructuring in function parameters
function showUser({ name, city }) {
    console.log(`${name} lives in ${city}`);
}

showUser(person);
