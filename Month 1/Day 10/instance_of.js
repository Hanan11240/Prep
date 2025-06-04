// The instanceof operator checks whether an object is an instance of a particular constructor (i.e., in its prototype chain).

// person1 instanceof Person; // true
// It checks if Person.prototype exists in the prototype chain of person1.

function Animal(name) {
    this.name = name;
}

const dog = new Animal('Dog');

console.log(dog instanceof Animal); 
console.log(dog instanceof Object); 

// Step 1: Create dog using new Animal()
// const dog = new Animal("Dog");

// JavaScript does the following:
// Create a new empty object → {}.
// Set the internal prototype of dog:
// dog.__proto__ = Animal.prototype

// Call the constructor:
// Animal.call(dog, "Dog");

// dog ---> Animal.prototype ---> Object.prototype ---> null





class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const myCar = new Car("Toyota");

console.log(myCar instanceof Car); // true
