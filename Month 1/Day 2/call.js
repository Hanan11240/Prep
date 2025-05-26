// In JavaScript, call, apply, and bind are methods available on functions that allow you to set the value of this and optionally pass arguments.
// Syntax: function.call(thisArg, arg1, arg2, ...)
// Invokes the function immediately with this set to thisArg.
// Arguments: Passed one by one.

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };
greet.call(person, 'Hello', '!');  // Hello, Alice!
