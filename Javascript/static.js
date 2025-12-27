// they belong to the class itself

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }
    sayHello(){
        console.log(`Hello, my username is :${this.username}`)
    }
    static finish(){
        console.log(`${this.userCount} users created sucessfully`);
    }
}


const user1 = new User("Pratham");
const user2 = new User("Madhav");
const user3 = new User("Vinayak");
const user4 = new User("Gautam");

// printing usernames
user1.sayHello();
user2.sayHello();
user3.sayHello();
user4.sayHello();

// printing total user count
User.finish();
