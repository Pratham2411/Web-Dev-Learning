function birthday(username,age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday to dear ${username}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);

}
birthday("Pratham",21);

function validEmail(email){
    return email.includes("@") ? true:false;
}
 console.log(validEmail("pratham.com"));
 console.log(validEmail("pratham@gmail.com"));