An Iterable is an Iterable Object
An iterable can be iterated over with for..of loops

The For Of Loop
The JavaScript for..of statement loops through the elements of an iterable object.

    Syntax
for (variable of iterable) {
    // code block to be executed
}
Iterating
Iterating means looping over a sequence of elements.

Here are some easy examples:

Iterating over a String
Iterating over an Array
Iterating over a Set
Iterating over a Map
Iterating Over a String
You can use a for..of loop to iterate over the elements of a string:

Example
const name = "W3Schools";

for (const x of name) {
    // code block to be executed
}
Iterating Over an Array
You can use a for..of loop to iterate over the elements of an Array:

Example 1
const letters = ["a", "b", "c"];

for (const x of letters) {
    // code block to be executed
}
Example 2
const numbers = [2, 4, 6, 8];

for (const x of numbers) {
    // code block to be executed
}
Iterating Over a Set
You can use a for..of loop to iterate over the elements of a Set:

Example
const letters = new Set(["a", "b", "c"]);

for (const x of letters) {
    // code block to be executed
}
Iterating Over a Map
You can use a for..of loop to iterate over the elements of a Map:

Example
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

for (const x of fruits) {
    // code block to be executed
}
ADVERTISEMENT

JavaScript Iterators
The iterator protocol defines how to produce a sequence of values from an object.

An object becomes an iterator when it implements a next() method.

The next() method must return an object with two properties:

value(the next value)
done(true or false)
value	The value returned by the iterator
    (Can be omitted if done is true)
done	true if the iterator has completed
false if the iterator has produced a new value