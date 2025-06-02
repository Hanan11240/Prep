// Example 1


// const o = {
//   a: 1,
//   b: 2,

//   __proto__: {
//     b: 3,
//     c: 4,
//   },
// };

// console.log(o.a); // 1
// console.log(o.b); // 2
// console.log(o.c); // 4
// console.log(o.d); // undefined



// --------------------------------example 2 -----------------------------------
// const o = {
//   a: 1,
//   b: 2,

//   __proto__: {
//     b: 3,
//     c: 4,
//     __proto__: {
//       d: 5,
//     },
//   },
// };

// // { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

// console.log(o.d); // 5



// -----------------------------------exaple 3 -----------------------------------------

// When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.
// const parent = {
//     value: 2,
//     method() {
//         return this.value + 1;
//     },
// };

// console.log(parent.method()); // 3

// const child = {
//     __proto__: parent,
// };
// console.log(child.method()); // 3

// child.value = 4; 

// console.log(child.method()); // 5


// ------------------------------------------------Example 4------------------------------------------------------

// The power of prototypes is that we can reuse a set of properties if they should be present on every instance 
// const boxes = [
//     { value: 1, getValue() { return this.value; } },
//     { value: 2, getValue() { return this.value; } },
//     { value: 3, getValue() { return this.value; } },
// ];

// for (const box of boxes) {
//     console.log(box.getValue());
// }

// This is subpar, because each instance has its own function property that does the same thing, which is redundant and unnecessary. Instead, we can move getValue to the [[Prototype]] of all boxes:



// ---------------------------------------------Eample 5----------------------------------------------------------
// const boxPrototype = {
//     getValue() {
//         return this.value;
//     }
// }


// const boxes = [
//     { value: 2, __proto__: boxPrototype },
//     { value: 3, __proto__: boxPrototype },
//     { value: 4, __proto__: boxPrototype },
// ];

// for (const box of boxes) {
//     console.log(box.getValue());
// }


// ------------------------------------------ Example 6 --------------------------------------

// This way, all boxes' getValue method will refer to the same function, lowering memory usage. However, manually binding the __proto__ for every object creation is still very inconvenient. This is when we would use a constructor function, which automatically sets the [[Prototype]] for every object manufactured. Constructors are functions called with new.

// function box(value) {
//     return this.value = value;
// }


// box.prototype.getValue = function () {
//     return this.value;
// }


// const boxes = [new box(1), new box(2), new box(3)];

// for (const box of boxes) {
//     console.log(box.getValue());
// }


// Note: If a non-primitive is returned from the constructor function, that value will become the result of the new expression. In this case the [[Prototype]] may not be correctly bound — but this should not happen much in practice.


// ----------------------------------------------- Example 7----------------------------------------------------------
// Because Box.prototype references the same object as the [[Prototype]] of all instances, we can change the behavior of all instances by mutating Box.prototype.

// function Box(value) {
//     this.value = value;
// }

// Box.prototype.getValue = function () {
//     return this.value;
// }

// const box = new Box(1)
// console.log(box.getValue())

// Box.prototype.getValue = function () {
//     return this.value + 1;
// };

// // console.log(box.getValue())

// // In this case, you’re mutating the existing Box.prototype object by replacing its getValue method. Since box was created with Box.prototype as its internal [[Prototype]], and that object is still the same (only the method changed), box.getValue() picks up the updated method.

// // So this is generally safe and expected.

// console.log(box.constructor.name)

// // What happens when you reassign Constructor.prototype to a new object
// Box.prototype = {
//     getValue() {
//         return this.value + 2;
//     }
// }

// const box2 = new Box(1);
// Box.prototype.extra = true;

// // console.log(box.getValue())
// // console.log(box2.getValue())
// // console.log(box.extra)
// // console.log(box2.extra)
// console.log(box2.constructor.name)


// constructor property is lost or wrong
// Box.prototype = {
//   getValue: function () {
//     return this.value + 1;
//   }
// };

// By default, the constructor property is:
// Box.prototype.constructor === Box //

// But after reassignment:
// Box.prototype.constructor === Object


// fix but manually
// Box.prototype = {
//   constructor: Box, // ✅ restore the correct constructor
//   getValue: function () {
//     return this.value + 1;
//   }
// };


// Why this matters
// User expectations: You might call instance.constructor.name expecting it to be "Box", but it’s "Object" instead.

// Some built-in methods rely on constructor: For instance, cloning or serializing logic may check .constructor to know how to handle the object.



// --------------------------------------- Example 8 ---------------------------------

// Implicit constructors of literals
// Some literal syntaxes in JavaScript create instances that implicitly set the [[Prototype]]. For example
// const object = { a: 1 };
// console.log(Object.getPrototypeOf(object) === Object.prototype); // true

// // Array literals automatically have `Array.prototype` as their `[[Prototype]]`
// const array = [1, 2, 3];
// console.log(Object.getPrototypeOf(array) === Array.prototype); // true

// // RegExp literals automatically have `RegExp.prototype` as their `[[Prototype]]`
// const regexp = /abc/;
// console.log(Object.getPrototypeOf(regexp) === RegExp.prototype); // true


// --------------------- Example 9 ----------------------------------------------- 
// It may be interesting to note that due to historical reasons, some built-in constructors' prototype property are instances themselves. For example, Number.prototype is a number 0, Array.prototype is an empty array, and RegExp.prototype is /(?:)/.
Number.prototype + 1; // 1
Array.prototype.map((x) => x + 1); // []
String.prototype + "a"; // "a"
RegExp.prototype.source; // "(?:)"
Function.prototype(); // Function.prototype is a no-op function by itself



