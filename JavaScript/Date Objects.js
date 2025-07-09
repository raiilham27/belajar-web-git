Examples
const d = new Date();
const d = new Date("2022-03-25");
Note
Date objects are static.The "clock" is not "running".

The computer clock is ticking, date objects are not.

JavaScript Date Output
By default, JavaScript will use the browser's time zone and display a date as a full text string:

Tue Jul 08 2025 15:05: 14 GMT +0700(Western Indonesia Time)

You will learn much more about how to display dates, later in this tutorial.

Creating Date Objects
Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:

new Date()
new Date(date string)

new Date(year, month)
new Date(year, month, day)
new Date(year, month, day, hours)
new Date(year, month, day, hours, minutes)
new Date(year, month, day, hours, minutes, seconds)
new Date(year, month, day, hours, minutes, seconds, ms)

new Date(milliseconds)
JavaScript new Date()
new Date() creates a date object with the current date and time:

Example
const d = new Date();
new Date(date string)
new Date(date string) creates a date object from a date string:

Examples
const d = new Date("October 13, 2014 11:13:00");
const d = new Date("2022-03-25");
Date string formats are described in the next chapter.

new Date(year, month, ...)
new Date(year, month, ...) creates a date object with a specified date and time.

7 numbers specify year, month, day, hour, minute, second, and millisecond(in that order):

Example
const d = new Date(2018, 11, 24, 10, 33, 30, 0);
Note
JavaScript counts months from 0 to 11:

January = 0.

December = 11.

Specifying a month higher than 11, will not result in an error but add the overflow to the next year:

Specifying:

const d = new Date(2018, 15, 24, 10, 33, 30);
Is the same as:

const d = new Date(2019, 3, 24, 10, 33, 30);
Specifying a day higher than max, will not result in an error but add the overflow to the next month:

Specifying:

const d = new Date(2018, 5, 35, 10, 33, 30);
Is the same as:

const d = new Date(2018, 6, 5, 10, 33, 30);
Using 6, 4, 3, or 2 Numbers
6 numbers specify year, month, day, hour, minute, second:

Example
const d = new Date(2018, 11, 24, 10, 33, 30);
5 numbers specify year, month, day, hour, and minute:

Example
const d = new Date(2018, 11, 24, 10, 33);
4 numbers specify year, month, day, and hour:

Example
const d = new Date(2018, 11, 24, 10);
3 numbers specify year, month, and day:

Example
const d = new Date(2018, 11, 24);
2 numbers specify year and month:

Example
const d = new Date(2018, 11);
You cannot omit month.If you supply only one parameter it will be treated as milliseconds.

    Example
const d = new Date(2018);
Previous Century
One and two digit years will be interpreted as 19xx:

Example
const d = new Date(99, 11, 24);
Example
const d = new Date(9, 11, 24);
JavaScript Stores Dates as Milliseconds
JavaScript stores dates as number of milliseconds since January 01, 1970.

Zero time is January 01, 1970 00:00:00 UTC.

One day(24 hours) is 86 400 000 milliseconds.

Now the time is: 1751961914609 milliseconds past January 01, 1970