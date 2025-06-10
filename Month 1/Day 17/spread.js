// The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
// Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.


// Example 1

// function sum(a, b, c) {
//     return a + b + c;
// }



// const numbers = [1, 2, 3];
// console.log(sum(...numbers))


// Spread syntax can be used when all elements from an object or array need to be included in a new array or object, or should be applied one-by-one in a function call's arguments list. There are three distinct places that accept the spread syntax:



// Function arguments list (myFunction(a, ...iterableObj, b))
// Array literals ([1, ...iterableObj, '4', 'five', 6])
// Object literals ({ ...obj, key: 'value' })



// Only iterable values, like Array and String, can be spread in array literals and argument lists. Many objects are not iterable, including all plain objects that lack a Symbol.iterator method:

// const obj = { key1: "value1" };
// const array = [...obj]; // TypeError: obj is not iterable


// Example 2
// On the other hand, spreading in object literals enumerates the own properties of the value. For typical arrays, all indices are enumerable own properties, so arrays can be spread into objects.

// const arr = [1, 2, 3];

// const obj = { ...arr }
// console.log(obj)

// Example 3
// All primitives can be spread in objects. Only strings have enumerable own properties, and spreading anything else doesn't create properties on the new object

// const obj = {...true, ...'test', ...10 }
// console.log(obj)



// Spread in function calls-------
// It is common to use Function.prototype.apply() in cases where you want to use the elements of an array as arguments to a function.

// function xyz(a, b, c) {
//     return a + b + c;

// }

// const args = [1, 2, 3];

// console.log(xyz.apply(null, args))

// function xyz(a, b, c) {
//     return a + b + c;

// }

// const args = [1, 2, 3];

// console.log(xyz(...args))




// Example 4
// Any argument in the argument list can use spread syntax, and the spread syntax can be used multiple times.


// function myFunction(v, w, x, y, z) {
//     console.log(v, w, x, y, z)
// }
// const args = [0, 1];

// myFunction(-1, ...args, 2, ...[3]);


// Example 5
// ------------------------------------- Apply for new operator -------------------
// When calling a constructor with new, it's not possible to directly use an array and apply(), because apply() calls the target function instead of constructing it, which means, among other things, that new.target will be undefined. However, an array can be easily used with new thanks to spread syntax:

// const dateFields = [1970, 0, 1];

// const d = new Date(...dateFields);
// console.log(d);



// Example 6
// --------- Spread in array literals -----------------------

// const parts = ["shoulders", "knees"];
// const lyrics = ["head", ...parts, "and", "toes"];
// console.log(lyrics)

// Copying an array
// const arr = [1, 2, 3];
// const arr2 = [...arr];

// arr2.push(4);
// // arr remains unaffected
// arr.push(5);
// // arr2 remains unaffected
// console.log(arr)
// console.log(arr2)


// Spread syntax effectively goes one level deep while copying an array. Therefore, it may be unsuitable for copying multidimensional arrays.

// const a = [[1], [2], [3]];
// const b = [...a];
// b.shift().shift();
// console.log(a);
// console.log(b);
// Oh no! Now array 'a' is affected as well:



// Example 7
// -------------------------------- Conditionally adding values to an array-------------------------------

// const isSummer = true;
// const fruits = ["apple", "banana",...(isSummer?['watermelon']:[])];
// // const fruits = ["apple", "banana", isSummer ? "watermelon" : undefined]; //  this is different than above
// console.log(fruits)


// The parentheses () in this line: are used only to group the ternary (conditional) expression:


// The expression inside (...) is evaluated first.
// If isSummer is true, the expression evaluates to ["watermelon"], otherwise [].
// Then the result of that expression is spread into the fruits array.

// ...isSummer ? ["watermelon"] : [] is wrong
// This would cause a syntax error, because JavaScript would try to apply the ... spread operator directly to isSummer, which is a boolean — and booleans are not iterable, so you can't spread them.



// Example 8 
// ----------------------------------Spread in object literals-----------------

// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { bar: "baz", y: 13 };

// const mergeObj = { ...obj1, ...obj2 };


// console.log(mergeObj)



// Example 9
// Overriding properties

// const obj1 = { foo: "bar", x: 42 };
// const obj2 = { foo: "baz", y: 13 };


// const mergedObj = { x: 41, ...obj1, ...obj2, y: 9 };

// console.log(mergedObj)



// Example 10
// Conditionally adding properties to an object

// const isSummer = true;
// const fruits = {
//     apple: 10,
//     banana: 5,
//     ...(isSummer ? { watermelon: 20 } : {})
// }


const isSummer = true;
const fruits = {
    apple: 10,
    banana: 5,
    ...(isSummer && { watermelon: 20 } )
}
console.log(fruits)

