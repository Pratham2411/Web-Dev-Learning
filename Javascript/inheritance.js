// parent class
class Animal {
    constructor(type) {
        this.type = type;
    }

    eat() {
        console.log(`This ${this.type} is eating`);
    }

    sleep() {
        console.log(`This ${this.type} is sleeping`);
    }
}

// child class
class Dog extends Animal {
    static name = "Dog";

    constructor() {
        super(Dog.name);
    }
}

// another child class
class Cat extends Animal {
    static name = "Cat";

    constructor() {
        super(Cat.name);
    }
}

// creating objects
const dog = new Dog();
const cat = new Cat();

// calling methods
dog.eat();
dog.sleep();

cat.eat();
cat.sleep();
