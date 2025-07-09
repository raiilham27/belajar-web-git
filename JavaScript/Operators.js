JavaScript Operators
Javascript operators are used to perform different types of mathematical and logical computations.

    Examples:
The Assignment Operator = assigns values

The Addition Operator + adds values

The Multiplication Operator * multiplies values

The Comparison Operator > compares values

JavaScript Assignment
The Assignment Operator(=) assigns a value to a variable:

Assignment Examples
let x = 10;
// Assign the value 5 to x
let x = 5;
// Assign the value 2 to y
let y = 2;
// Assign the value x + y to z:
let z = x + y;
JavaScript Addition
The Addition Operator(+) adds numbers:

Adding
let x = 5;
let y = 2;
let z = x + y;
JavaScript Multiplication
The Multiplication Operator(*) multiplies numbers:

Multiplying
let x = 5;
let y = 2;
let z = x * y;
Types of JavaScript Operators
There are different types of JavaScript operators:

Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators
JavaScript Arithmetic Operators
Arithmetic Operators are used to perform arithmetic on numbers:

Arithmetic Operators Example
let a = 3;
let x = (100 + 50) * a;
Operator	Description
    + Addition
    - Subtraction
    * Multiplication
    ** Exponentiation(ES2016)
    / Division
    % Modulus(Division Remainder)
++Increment
--Decrement
Note
Arithmetic operators are fully described in the JS Arithmetic chapter.

    ADVERTISEMENT

JavaScript Assignment Operators
Assignment operators assign values to JavaScript variables.

The Addition Assignment Operator(+=) adds a value to a variable.

    Assignment
let x = 10;
x += 5;
Operator	Example	Same As
    = x = y	x = y
        += x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x / = y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
Note
Assignment operators are fully described in the JS Assignment chapter.

JavaScript Comparison Operators
Operator	Description
    == equal to
        === equal value and equal type
            != not equal
                !== not equal value or not equal type
                    > greater than
                        < less than
                            >= greater than or equal to
                                <= less than or equal to
                                    ? ternary operator
Note
Comparison operators are fully described in the JS Comparisons chapter.

JavaScript String Comparison
All the comparison operators above can also be used on strings:

Example
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
Note that strings are compared alphabetically:

Example
let text1 = "20";
let text2 = "5";
let result = text1 < text2;
JavaScript String Addition
The + can also be used to add(concatenate) strings:

Example
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;
The += assignment operator can also be used to add(concatenate) strings:

Example
let text1 = "What a very ";
text1 += "nice day";
The result of text1 will be:

What a very nice day
Note
When used on strings, the + operator is called the concatenation operator.

Adding Strings and Numbers
Adding two numbers, will return the sum as a number like 5 + 5 = 10.

Adding a number and a string, will return the sum as a concatenated string like 5 + "5" = "55".

    Example
let x = 5 + 5;
let y = "5" + 5;
let z = "Hello" + 5;
The result of x, y, and z will be:

10
55
Hello5
