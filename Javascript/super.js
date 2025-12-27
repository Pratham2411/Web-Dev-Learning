// used to acess properties and methods of parent
// similar to this (used in a subclass)
class Animal {
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    constructor(name, age,breed) {
        super(name,age);            // calls parent constructor
        this.breed = breed;
    }

    eat() {
        super.eat();            // calls parent method
        console.log(`${this.name} is eating dog food`);
    }
}

const dog = new Dog("Bruno",5, "Labrador");
console.log(dog.age);
dog.eat();
