// The JavaScript apply() Method
// The apply() method is similar to the call() method (previous chapter).

// In this example the fullName method of person is applied on person1:

// Example
// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// const person1 = {
//   firstName: "Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe":
// person.fullName.apply(person1);

// The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// The apply() method is very handy if you want to use an array instead of an argument list.

// The apply() Method with Arguments
// The apply() method accepts arguments in an array:

// Example
// const person = {
//   fullName: function(city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   }
// }

// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }

// person.fullName.apply(person1, ["Oslo", "Norway"]);

