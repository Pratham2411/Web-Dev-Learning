// array of fruit objects
const fruits = [
    { name: "Apple", color: "Red", calorie: 52 },
    { name: "Banana", color: "Yellow", calorie: 89 },
    { name: "Orange", color: "Orange", calorie: 47 }
];

// simple push
fruits.push({ name: "Mango", color: "Yellow", calorie: 60 });

// display all fruits
fruits.forEach(fruit => {
    console.log(`Name: ${fruit.name}`);
    console.log(`Color: ${fruit.color}`);
    console.log(`Calorie: ${fruit.calorie}`);
    console.log("-----");
});

// map: extract name and color
const nameAndColor = fruits.map(fruit => ({
    name: fruit.name,
    color: fruit.color
}));
console.log(nameAndColor);

// filter: only yellow fruits
const yellowFruits = fruits.filter(fruit => fruit.color === "Yellow");
console.log(yellowFruits);

// slice: get a portion of the array
const someFruits = fruits.slice(1, 3);
console.log(someFruits);
