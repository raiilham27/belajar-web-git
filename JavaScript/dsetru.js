Destructuring Assignment Syntax
The destructuring assignment syntax unpack object properties into variables:

let { firstName, lastName } = person;
It can also unpack arrays and any other iterables:

let [firstName, lastName] = person;
Object Destructuring
Example
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// Destructuring
let { firstName, lastName } = person;