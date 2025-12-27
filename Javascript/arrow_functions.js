// a consise way to write function expressions
// use for simple functions
// (parameter)=> some code

// normal fn
// function hello(){
//     console.log("Hello");
// }
// hello();

// expression
// const hello=function(){
//     console.log("Hello");
// }
// hello();


// Arrow function
// const hello=(name) => console.log(`Hello ${name}`);
// hello("Pratham");

const hello2=(name,age)=> {
   console.log(`Hello ${name}`);
   console.log(`You are ${age} years old`);
}
// setTimeout(()=> console.log("Hello Buddy"),3000);
hello2("Pratham",21);

const numbers=[1,2,3,4,5,6];

const squares= numbers.map((element)=> (element*element));
console.log(squares);

const evenums= numbers.filter((element)=> element%2===0);
console.log(evenums);

const totalsum= numbers.reduce((total,element)=> {return total+element});
console.log(totalsum);

// Note:- we are not writing return when not using {} in arrow fns
// If we use {} in code we have to write return
// we generally no use {} if we have only one line of code so no need of return