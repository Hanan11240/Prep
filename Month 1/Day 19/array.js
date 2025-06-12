// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


// JavaScript arrays are resizable and can contain a mix of different data types.
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

const fruits = [];

fruits.push("banana", "apple", "peach");

// When setting a property on a JavaScript array when the property is a valid array index and that index is outside the current bounds of the array, the engine will update the array's length property accordingly:
fruits[5] = "mango"
// console.log(fruits.length)

// console.log(fruits) [ 'banana', 'apple', 'peach', <2 empty items>, 'mango' ]


// Increasing the length extends the array by adding empty slots without creating any new elements — not even undefined.
fruits.length = 10;
// console.log(fruits) //['banana','apple', 'peach', <2 empty items>, 'mango',  <4 empty items>]


// Decreasing the length property does, however, delete elements.
fruits.length = 2;
// console.log(fruits) //[ 'banana', 'apple' ]



// Array methods and empty slots

// Methods that have special treatment for empty slots include the following: concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice()


//  Iteration methods such as forEach don't visit empty slots at all.
// Other methods, such as concat, copyWithin, etc., preserve empty slots when doing the copying, so in the end the array is still sparse.


// const colors = ["red", "yellow", "green"];

// colors[5] = "purple";

// colors.forEach((color) => console.log(color))
// console.log(colors)

// const reversedArray = colors.reverse();
// console.log(reversedArray)


// Newer methods (e.g., keys) do not treat empty slots specially and treat them as if they contain undefined. Methods that conflate empty slots with undefined elements include the following: entries(), fill(), find(), findIndex(), findLast(), findLastIndex(), includes(), join(), keys(), toLocaleString(), toReversed(), toSorted(), toSpliced(), values(), and with().




// const colors = ["red", "yellow", "green"];

// colors[5] = "purple";

// const iterator = colors.keys();

// for (let key of iterator) {
//     console.log(key, colors[key])
// }


// const newColors = colors.toReversed();
// console.log(newColors)



// Copying methods and mutating methods

// Some methods do not mutate the existing array that the method was called on, but instead return a new array. They do so by first constructing a new array and then populating it with elements. The copy always happens shallowly — the method never copies anything beyond the initially created array. Elements of the original array(s) are copied into the new array as follows:

// Objects: the object reference is copied into the new array. Both the original and new array refer to the same object. That is, if a referenced object is modified, the changes are visible to both the new and original arrays.
// Primitive types such as strings, numbers and booleans (not String, Number, and Boolean objects): their values are copied into the new array.



// Other methods mutate the array that the method was called on, in which case their return value differs depending on the method: sometimes a reference to the same array, sometimes the length of the new array.


// The following methods create new arrays by accessing this.constructor[Symbol.species] to determine the constructor to use: concat(), filter(), flat(), flatMap(), map(), slice(), and splice() (to construct the array of removed elements that's returned).

// The following methods always create new arrays with the Array base constructor: toReversed(), toSorted(), toSpliced(), and with().


// An easy way to change a mutating method into a non-mutating alternative is to use the spread syntax or slice() to create a copy first:


// const arr = [1, 2, 3, 4, 5]

// arr.copyWithin(0, 1, 2) // mutates arr
// console.log(arr)
// const arr2 = arr.slice().copyWithin(0, 1, 2);   // does not mutate arr

// console.log(arr)

// const arr3 = [...arr].copyWithin(0, 1, 2); // does not mutate arr
// console.log(arr)



// Create an array

//  array literal notation,

// const fruits = ["Apple", "Banana"];
// console.log(fruits.length);

// // using the Array() constructor
// const fruits2 = new Array("Apple", "Banana");
// console.log(fruits2.length);


// // 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3);
