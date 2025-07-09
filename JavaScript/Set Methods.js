Basic Set Methods
new Set()
add()
clear()
delete ()
entries()
forEach()
has()
keys()
values()
Set Properties
size

The new Set() Method
Pass an array to the new Set() constructor:

Example
// Create a new Set
const letters = new Set(["a", "b", "c"]);
The add() Method
Example
letters.add("d");
letters.add("e");
If you add equal elements, only the first will be saved:

Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
Note
The primary feature of Set objects is that they only store unique values.

If an attempt is made to add an element that already exists in the set, the add() method will have no effect, and the set will remain unchanged.

The size Property
Example
// Create a new Set
const mySet = new Set(["a", "b", "c"]);

// The number of elements are
mySet.size;
Listing Set Elements
You can list all Set elements(values) with a for..of loop:

    Example
// Create a Set
const letters = new Set(["a", "b", "c"]);

// List all Elements
let text = "";
for (const x of letters) {
    text += x;
}
The has() Method
The has() method returns true if a specified value exists in a set.

    Example
// Create a Set
const letters = new Set(["a", "b", "c"]);

// Does the Set contain "d"?
answer = letters.has("d");The values() Method
The values() method returns an Iterator object with the values in a Set:

Example 1
// Create a Set
const letters = new Set(["a", "b", "c"]);

// Get all Values
const myIterator = letters.values();

// List all Values
let text = "";
for (const entry of myIterator) {
    text += entry;
}The union() Method
The union() method returns the union of two sets.

The union() method returns a new set containing the elements which are in this set, or in the argument set, or in both:

Union

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.union(B);
The intersection() Method
The intersection() method returns the intersection of two sets.

The intersection() method returns a new set containing the elements which are in this set and in the argument set:

Intersection

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.intersection(B);
The difference() Method
The difference() method returns the difference between two sets.

The difference() method returns a new set containing elements which are in this set but not in the argument set:

Difference

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.difference(B);
The symmetricDifference() Method
The symmetricDifference() method returns the symmetric difference between to sets.

The symmetricDifference() method returns a new set containing elements which are in this set or in the argument set, but not in both:

Symmetric Difference

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

const C = A.symetricDifference(B);
ADVERTISEMENT

The isSubsetOf() Method
The isSubsetOf() method returns true if all elements in this set is also elements in the argument set:

Subset

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

let answer = A.isSubsetOf(B);
The isSupersetOf() Method
The isSupersetOf() method returns true if all elements in the argument set are also in this set:

Superset

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

let answer = A.isSupersetOf(B);
The isDisjointFrom() Method
The isDisjointFrom() method returns true if this set has no elements in common with the argument set:

Disjoint

Example
const A = new Set(['a', 'b', 'c']);
const B = new Set(['b', 'c', 'd']);

let answer = A.isDisjointFrom(B);
Complete Set Reference
For a complete reference, go to our:

Complete JavaScript Set Reference.

The reference contains descriptions and examples of all Set Properties and Methods.