// The XMLHttpRequest object is used to request data from a server.

// Send a Request To a Server
// To send a request to a server, we use the open() and send() methods of the XMLHttpRequest object:

// xhttp.open("GET", "ajax_info.txt", true);
// xhttp.send();
// Method	Description
// open(method, url, async)	Specifies the type of request

// method: the type of request: GET or POST
// url: the server (file) location
// async: true (asynchronous) or false (synchronous)
// send()	Sends the request to the server (used for GET)
// send(string)	Sends the request to the server (used for POST)
// The url - A File On a Server
// The url parameter of the open() method, is an address to a file on a server:

// xhttp.open("GET", "ajax_test.asp", true);
// The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).

// Asynchronous - True or False?
// Server requests should be sent asynchronously.

// The async parameter of the open() method should be set to true:

// xhttp.open("GET", "ajax_test.asp", true);
// By sending asynchronously, the JavaScript does not have to wait for the server response, but can instead:

// execute other scripts while waiting for server response
// deal with the response after the response is ready
// The default value for the async parameter is async = true.

// You can safely remove the third parameter from your code.

// Synchronous XMLHttpRequest (async = false) is not recommended because the JavaScript will stop executing until the server response is ready. If the server is busy or slow, the application will hang or stop.

// GET or POST?
// GET is simpler and faster than POST, and can be used in most cases.

// However, always use POST requests when:

// A cached file is not an option (update a file or database on the server).
// Sending a large amount of data to the server (POST has no size limitations).
// Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
// GET Requests
// A simple GET request:

// Example
// xhttp.open("GET", "demo_get.asp");
// xhttp.send();
