// What are Cookies?
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.
// Cookies are saved in name-value pairs like:

// username = John Doe
// When a browser requests a web page from a server, cookies belonging to the page are added to the request. This way the server gets the necessary data to "remember" information about users.

// None of the examples below will work if your browser has local cookies support turned off.

// Create a Cookie with JavaScript
// JavaScript can create, read, and delete cookies with the document.cookie property.

// With JavaScript, a cookie can be created like this:

// document.cookie = "username=John Doe";
// You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// With a path parameter, you can tell the browser what path the cookie belongs to. By default, the cookie belongs to the current page.

// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// ADVERTISEMENT
// Read a Cookie with JavaScript
// With JavaScript, cookies can be read like this:

// let x = document.cookie;
// document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

// Change a Cookie with JavaScript
// With JavaScript, you can change a cookie the same way as you create it:

// document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
// The old cookie is overwritten.

// Delete a Cookie with JavaScript
// Deleting a cookie is very simple.

// You don't have to specify a cookie value when you delete a cookie.

// Just set the expires parameter to a past date:

// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";