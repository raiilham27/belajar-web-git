// JavaScript Promise.any()
// Example
// // Create a Promise
// const myPromise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 200, "King");
// });

// // Create another Promise
// const myPromise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "Queen");
// });

// // Run when any promise fulfill
// Promise.any([myPromise1, myPromise2]).then((x) => {
//   myDisplay(x);
// });
// Promise.any() is supported in all modern browsers since September 2020:

// Chrome 85	Edge 85	Firefox 79	Safari 14	Opera 71
// Aug 2020	Aug 2020	Jul 2020	Sep 2020	Sep 2020
// JavaScript String ReplaceAll()
// ES2021 introduced the string method replaceAll():

// Example
// text = text.replaceAll("Cats","Dogs");
// text = text.replaceAll("cats","dogs");
// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.

// Example
// text = text.replaceAll(/Cats/g,"Dogs");
// text = text.replaceAll(/cats/g,"dogs");
