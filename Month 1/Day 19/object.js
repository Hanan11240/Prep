// Changes to the Object.prototype object are seen by all objects through prototype chaining, unless the properties and methods subject to those changes are overridden further along the prototype chain. This provides a very powerful although potentially dangerous mechanism to override or extend object behavior. To make it more secure, Object.prototype is the only object in the core JavaScript language that has immutable prototype — the prototype of Object.prototype is always null and not changeable.


// In case where a semantically equivalent static method doesn't exist, or if you really want to use the Object.prototype method, you should directly call() the Object.prototype method on your target object instead, to prevent the object from having an overriding property that produces unexpected results.

// const obj = {
//   foo: 1,
//   // You should not define such a method on your own object,
//   // but you may not be able to prevent it from happening if
//   // you are receiving the object from external input
//   propertyIsEnumerable() {
//     return false;
//   },
// };

// obj.propertyIsEnumerable("foo"); // false; unexpected result
// Object.prototype.propertyIsEnumerable.call(obj, "foo"); // true; expected result
