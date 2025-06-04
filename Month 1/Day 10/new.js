
// The new keyword is used to create an instance of a constructor function or class.
function Person(name) {
    this.name = name;
}

const person1 = new Person("Alice");
console.log(person1)


// What new does internally:
// Creates a new empty object: {}

// Sets the prototype: obj.__proto__ = Constructor.prototype

// Binds this to the new object: Constructor.call(obj)

// Returns the object (unless the constructor explicitly returns another object)

