// JavaScript Display Possibilities
// JavaScript can "display" data in different ways:

// Writing into an HTML element, using innerHTML or innerText.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().
// Using innerHTML
// To access an HTML element, you can use the document.getElementById(id) method.

// Use the id attribute to identify the HTML element.

// Then use the innerHTML property to change the HTML content of the HTML element:

// Example
//     < !DOCTYPE html >
//         <html>
//             <body>

//                 <h1>My First Web Page</h1>
//                 <p>My First Paragraph</p>

//                 <p id="demo"></p>

//                 <script>
//                     document.getElementById("demo").innerHTML = "<h2>Hello World</h2>";
//                 </script>

//             </body>
//         </html>


// Using document.write()
// For testing purposes, it is convenient to use document.write():

// Example
//     < !DOCTYPE html >
//         <html>
//             <body>

//                 <h1>My First Web Page</h1>
//                 <p>My first paragraph.</p>

//                 <script>
//                     document.write(5 + 6);
//                 </script>

//             </body>
//         </html>

// Example
//     < !DOCTYPE html >
//         <html>
//             <body>

//                 <h1>My First Web Page</h1>
//                 <p>My first paragraph.</p>

//                 <button type="button" onclick="document.write(5 + 6)">Try it</button>

//             </body>
//         </html>
