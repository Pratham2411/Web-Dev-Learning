// these are special method for defining properties and methods of objects

// constructor function
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.drive = function () {
        console.log(`You drive this ${this.model}`);
    };
}

// creating car objects
const car1 = new Car("Toyota", "Corolla", 2020, "White");
const car2 = new Car("Honda", "City", 2022, "Black");
const car3 = new Car("Tesla", "Model 3", 2023, "Red");

// calling drive function
car1.drive();
car2.drive();
car3.drive();


