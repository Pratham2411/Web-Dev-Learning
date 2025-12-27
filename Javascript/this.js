// used as referance to the object where this is used
const person={
    firstName:"Pratham",
    lastName:"raj",
    age:21,
    isEmployed: false,
    sayHello: function() {console.log(`Hello, I am ${this.firstName}`)}
    // don't use arrow fns with this
    
}

person.sayHello();