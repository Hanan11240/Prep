// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.

const person = {
    isHuman: false,
    printIntroduction() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
}

const me = Object.create(person);
me.name = "Hanan";

me.isHuman = true;

me.printIntroduction();

