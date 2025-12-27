// element,index array are given
let nums=[1,2,3,4,5];
function double(element,index,array){
  array[index]=element*2;
}
function display(element){
    console.log(element);
}
nums.forEach(double);
// nums.forEach(display);
console.log(nums);