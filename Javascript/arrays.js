let fruits=["apple","orange","banana"];
// console.log(fruits);
fruits[3]="coconut";
// console.log(fruits);
fruits.push("guava");
// console.log(fruits);
fruits.unshift("mango"); // add in beginning
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift(); // remove from beginning
// console.log(fruits);
let numOfFruits=fruits.length;
// console.log(numOfFruits);
let index=fruits.indexOf("apple");
// return -1 if not found
// console.log(index);

// for(let i=0;i<numOfFruits;i++){
//     console.log(fruits[i]);
// }
fruits.sort();
fruits.sort().reverse();
// for each loop
for(let fruit of fruits){
    console.log(fruit);
}