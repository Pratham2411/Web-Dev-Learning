// JSON = JavaScript Object Notation
// It is a lightweight data format used to store and exchange data
// JSON is always written as STRING text, not as real JS objects/arrays

// -------------------- ARRAY → JSON --------------------
const names = ["Pratham", "Gautam", "Madhav", "Vinayak"];

// Normal JS array (can be accessed, modified, looped)
console.log(names);

// JSON.stringify()
// converts JS object/array → JSON string
// used when sending data to server, localStorage, files, APIs
const jsonString = JSON.stringify(names);

// JSON string (cannot use array methods on this)
console.log(jsonString);

// -------------------- OBJECT → JSON --------------------
const person = {
    name: "Pratham",
    age: 21,
    isEmployed: true,
    hobbies: ["cricket", "coding", "badminton"]
};

// Normal JS object
console.log(person);

// Convert object to JSON string
const jsonString2 = JSON.stringify(person);
console.log(jsonString2);

// -------------------- ARRAY OF OBJECTS → JSON --------------------
const people = [
    {
        name: "Pratham",
        age: 21,
        isEmployed: true,
        hobbies: ["cricket", "coding", "badminton"]
    },
    {
        name: "Gautam",
        age: 21,
        isEmployed: false,
        hobbies: ["cricket", "coding", "gym"]
    },
    {
        name: "Vinayak",
        age: 20,
        isEmployed: true,
        hobbies: ["cricket", "singing", "badminton"]
    }
];

// JS array of objects
console.log(people);

// Convert array of objects to JSON string
const jsonString3 = JSON.stringify(people);
console.log(jsonString3);

// -------------------- JSON.parse() --------------------
// JSON.parse()
// converts JSON string → JS object/array
// used when receiving data from server, localStorage, APIs

const parsedNames = JSON.parse(jsonString);
// parsedNames is now a real JS array again
console.log(parsedNames);

const parsedPerson = JSON.parse(jsonString2);
// parsedPerson is now a real JS object again
console.log(parsedPerson);

const parsedPeople = JSON.parse(jsonString3);
// parsedPeople is now a real JS array of objects again
console.log(parsedPeople);


