// accepts a callback like forEach butt return a new array
const nums=[1,2,3,4,5];
function square(element){
  return Math.pow(element,2);
}
const squares=nums.map(square);
console.log(squares);
