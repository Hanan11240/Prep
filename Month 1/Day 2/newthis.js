// when a function is invoked with new in fornt of it , otherwise known as a constructor call, the following things are done automatically

//1. A brand new object is created.
//2. The newly constructed object is [[Prototype]] - linked .
//3, The newly constructed object is set as the this binding for that function call.
//4. Unless the function returns its own alternate object. the new invoked function call will autimatically return the newly constructed object.


function foo(a) {
    this.a = a;
}

var bar = new foo(2);
console.log(bar.a)


// Step 1 -> A new object is created
// JavaScript does something like this behind the scenes:
// var obj = {};

// Step 2 ->  The new object is linked to foo.prototype
// The newly created object gets its internal [[Prototype]] (accessible via __proto__) set to the prototype of the constructor:
// obj.__proto__ = foo.prototype;

//Step 3 -> The constructor function (foo) is called with this bound to the new object
// Now the function body runs like this:
// foo.call(obj, 2); 

// Step 4 -> The object is returned
// return obj;


// bar = { a: 2, __proto__: foo.prototype }


// Why link the new object to foo.prototype?
// Because it enables inheritance and shared behavior.

// function Foo() {}
// Foo.prototype.sayHello = function () {
//   console.log("Hello!");
// };

// const bar = new Foo();
// bar.sayHello(); 

// -> bar doesn’t have its own sayHello method.
//  -> JavaScript looks up bar.__proto__, which is Foo.prototype.
// -> It finds sayHello there and calls it.

// You can define methods once on Foo.prototype, and all objects created with new Foo() can use them
// This saves memory and allows for consistent, shared behavior

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   return `Hi, I'm ${this.name}`;
// };

// const alice = new Person("Alice");
// const bob = new Person("Bob");

// console.log(alice.greet());
// console.log(bob.greet()); 







