// Example
// {
//     let x = 2;
// }
// // x can NOT be used here
// Variables declared with the var keyword can NOT have block scope.

//     Variables declared inside a { } block can be accessed from outside the block.

//     Example
// {
//     var x = 2;
// }
// // x CAN be used here
// Local Scope
// Variables declared within a JavaScript function, are LOCAL to the function:

//     Example
// // code here can NOT use carName

// function myFunction() {
//     let carName = "Volvo";
//     // code here CAN use carName
// }

// // code here can NOT use carName