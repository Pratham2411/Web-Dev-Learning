//... is spread operator
// it unpacks an array or string into different elements
let num1=[1,2,3,4,5];
let mx=Math.max(...num1);
let min=Math.min(...num1);
// console.log(mx);
// console.log(min);

let names="Pratham Raj";
let arr=[...names].join("-");
// console.log(arr);
let num2=[7,8,9];
let num3=[...num1,...num2,10];
// console.log(num3);

// ...rest is rest parameter
// it bundle seperate elements in an array
function openFridge(...foods){
    console.log(foods);
}
function getFood(...foods){
    return foods;
}
const food1="pizza";
const food2="burger";
const food3="momos";
const food4="chowmin";
openFridge(food1,food2,food3,food4);
const foods=getFood(food1,food2,food3,food4);
console.log(foods) ;
