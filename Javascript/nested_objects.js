// Address class
class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

// Person class using address via spread
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = { ...address };
    }
}

// creating address objects
const addr1 = new Address("MG Road", "Patna", "India");
const addr2 = new Address("Park Street", "Kolkata", "India");
const addr3 = new Address("Link Road", "Mumbai", "India");

// creating person objects
const person1 = new Person("Pratham", 21, addr1);
const person2 = new Person("Gautam", 22, addr2);
const person3 = new Person("Vinayak", 23, addr3);

// printing persons
console.log(person1);
console.log(person2);
console.log(person3);
