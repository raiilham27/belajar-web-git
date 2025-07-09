JavaScript String Padding
ECMAScript 2017 added two string methods to JavaScript: padStart() and padEnd() to support padding at the beginning and at the end of a string.

    Examples
let text = "5";
text = text.padStart(4, 0);
let text = "5";
text = text.padEnd(4, 0);
JavaScript Object Entries
ECMAScript 2017 added the Object.entries() method to objects.

    Object.entries() returns an array of the key / value pairs in an object:

Example
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let text = Object.entries(person);
Object.entries() makes it simple to use objects in loops:

Example
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
}
Object.entries() also makes it simple to convert objects to maps:

Example
const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

const myMap = new Map(Object.entries(fruits));
JavaScript Object Values
Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

Example
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let text = Object.values(person);