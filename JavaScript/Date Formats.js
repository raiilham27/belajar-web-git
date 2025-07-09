JavaScript Date Input
There are generally 3 types of JavaScript date input formats:

Type	Example
ISO Date	"2015-03-25"(The International Standard)
Short Date	"03/25/2015"
Long Date	"Mar 25 2015" or "25 Mar 2015"
The ISO format follows a strict standard in JavaScript.

The other formats are not so well defined and might be browser specific.

JavaScript Date Output
Independent of input format, JavaScript will(by default ) output dates in full text string format:

Tue Jul 08 2025 15:05: 58 GMT +0700(Western Indonesia Time)
JavaScript ISO Dates
ISO 8601 is the international standard for the representation of dates and times.

The ISO 8601 syntax(YYYY - MM - DD) is also the preferred JavaScript date format:

Example(Complete date)
const d = new Date("2015-03-25");
The computed date will be relative to your time zone.
Depending on your time zone, the result above will vary between March 24 and March 25.


ISO Dates(Year and Month)
ISO dates can be written without specifying the day(YYYY - MM):

Example
const d = new Date("2015-03");
Time zones will vary the result above between February 28 and March 01.

ISO Dates(Only Year)
ISO dates can be written without month and day(YYYY):

Example
const d = new Date("2015");
Time zones will vary the result above between December 31 2014 and January 01 2015.

ISO Dates(Date - Time)
ISO dates can be written with added hours, minutes, and seconds(YYYY - MM - DDTHH: MM: SSZ):

Example
const d = new Date("2015-03-25T12:00:00Z");
Date and time is separated with a capital T.

UTC time is defined with a capital letter Z.

If you want to modify the time relative to UTC, remove the Z and add + HH:MM or - HH:MM instead:

Example
const d = new Date("2015-03-25T12:00:00-06:30");