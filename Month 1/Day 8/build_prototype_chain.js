// Step 1: Base object
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

// Step 2: Inheriting from Animal
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Link Dog prototype to Animal prototype
Dog.prototype = Object.create(Animal.prototype);

// Fix the constructor reference
Dog.prototype.constructor = Dog;

// Add Dog-specific method
Dog.prototype.bark = function () {
  console.log(`${this.name} barks.`);
};

// Step 3: Inheriting from Dog
function Puppy(name, breed, age) {
  Dog.call(this, name, breed);
  this.age = age;
}

// Link Puppy prototype to Dog prototype
Puppy.prototype = Object.create(Dog.prototype);

// Fix constructor reference
Puppy.prototype.constructor = Puppy;

// Add Puppy-specific method
Puppy.prototype.play = function () {
  console.log(`${this.name} is playing.`);
};


const pup = new Puppy("Max", "Golden Retriever", 1);

pup.play();   // Max is playing.
pup.bark();   // Max barks.
pup.speak();