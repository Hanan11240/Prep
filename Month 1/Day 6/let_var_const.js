// In JavaScript, you can declare variables with the var, let, and const keywords.

// var and let create variables that can be reassigned another value.
// const creates "constant" variables that cannot be reassigned another value.


// ------------------var-------------------------------------------------------------//

// var number = 50

// function print() {
//   var square = number * number
//   console.log(square)
// }

// console.log(number) // 50

// print()

// The number variable has a global scope – it's declared outside functions in the global space – so you can access it everywhere (inside and outside functions).


// local scope
// function print() {
//   var number = 50
//   var square = number * number
//   console.log(square)
// }

// print() // 2500

// console.log(number)

// Here, we declared the number variable in the function print, so it has a local scope. This means that the variable can only be accessed inside that function. Any attempt to access the variable outside the function where it was declared will result in a variable is not defined reference error.



//Variables declared with var can be redeclared and reassigned.


// var number = 50
// console.log(number) 

// var number = 100
// console.log(number) 




// var number = 50
// console.log(number) 

// number = 100
// console.log(number) 

// number = 200
// console.log(number)  


// --------------------------------- let --------------------------------------//
// Variables declared with let can have a global, local, or block scope. Block scope is for variables declared in a block. A block in JavaScript involves opening and closing curly braces:

// let number = 50

// function print() {
//   let square = number * number

//   if (number < 60) {
//     var largerNumber = 80
//     let anotherLargerNumber = 100

//     console.log(square)
//   }

//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }

// print()



//Just like var, variables declared with let can be reassigned to other values, but they cannot be redeclared.

// let number = 50
// console.log(number) 

// number = 100
// console.log(number) 



//error because redeclared
//let number = 50

// let number = 100



//-------------------------------------const---------------------------------//
// Variables declared with const are similar to let in regards to scope.
// const number = 50

// function print() {
//   const square = number * number

//   if (number < 60) {
//     var largerNumber = 80
//     const anotherLargerNumber = 100

//     console.log(square)
//   }

//   console.log(largerNumber)
//   console.log(anotherLargerNumber)
// }

// print()



// const is different from var and let. const is used for declaring constant variables – which are variables with values that cannot be changed. So such variables cannot be redeclared, and neither can they be reassigned to other values.


//error
// const number = 50

// const number = 100


//error
// const number = 50

// number = 100

// In JavaScript, the Temporal Dead Zone (TDZ) is the area of a code block where a variable declared with let or const exists but cannot be accessed until it is initialized with a value. 
