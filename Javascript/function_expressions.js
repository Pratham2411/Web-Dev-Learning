// a way to define functions as values or variables

const hello=function(){
    console.log("Hello");
}

// hello();

// setTimeout(hello,3000);
// another way
setTimeout(function(){
    console.log("Hello");
},3000);

const nums=[1,2,3,4,5];
// no need to declare a function
const squares=nums.map(function(element){
    return element*element;
});

const even=nums.filter(function(element){
    return element%2===0;
});

const totalsum=nums.reduce(function(total,element){
    return total+element;
});
console.log(squares);
console.log(even);
console.log(totalsum);