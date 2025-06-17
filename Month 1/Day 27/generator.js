// The function* declaration creates a binding of a new generator function to a given name. A generator function can be exited and later re-entered, with its context (variable bindings) saved across re-entrances.

// function* generator(i) {
//     yield i;
//     yield i + 10
// }


// const gen = generator(10);

// console.log(gen.next().value)
// console.log(gen.next().value)

//  Generator functions do not have arrow function counterparts.
// function and * are separate tokens, so they can be separated by whitespace or line terminators.

// A function* declaration creates a GeneratorFunction object. Each time a generator function is called, it returns a new Generator object, which conforms to the iterator protocol.


// Example 2


function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
}

// function* generator(i) {

//     yield i;
//     yield* anotherGenerator(i);
//     yield i + 10;
// }

// const gen = generator(10);

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)


// Return statement in a generator

// function* yieldAndReturn() {
//   yield "Y";
//   return "R";
//   yield "unreachable";
// }

// const gen = yieldAndReturn();
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)



// Generator as an object property

// const someObj ={
//   *generator(){
//     yield "A";
//     yield "B";
//   }
// }

// const gen = someObj.generator();

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

// Generator as an object method

// class Foo {
//   *generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }
// }

// const f = new Foo();
// const gen = f.generator();

// console.log(gen.next()); // { value: 1, done: false }
// console.log(gen.next()); // { value: 2, done: false }
// console.log(gen.next()); // { value: 3, done: false }
// console.log(gen.next()); // { value: undefined, done: true }


// // Generators are not constructable

// function* f() {}
// const obj = new f(); // throws "TypeError: f is not a constructor


// Generator defined in an expression

// const foo = function* () {
//   yield 10;
//   yield 20;
// };

// const bar = foo();
// console.log(bar.next()); // {value: 10, done: false}


// Generator example

function* powers(n) {
  // Endless loop to generate
  for (let current = n; ; current *= n) {
    yield current;
  }
}

for (const power of powers(2)) {
  // Controlling generator
  if (power > 32) {
    break;
  }
  console.log(power);
  // 2
  // 4
  // 8
  // 16
  // 32
}
