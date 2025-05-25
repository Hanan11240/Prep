//  The scope is the current context of execution in which values and expressions are "visible" or can be referenced.



// Global scope: The default scope for all code running in script mode.
// Module scope: The scope for code running in module mode.

// Function scope: The scope created with a function.
// Block scope: The scope created with a pair of curly braces (a block).

// Example 1

// Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

//error
// function exampleFunction() {
//   const x = "declared inside function"; 
//   console.log("Inside function");
//   console.log(x);
// }

// console.log(x); 

//no error
// function exampleFunction() {
//     console.log(x)
//     console.log("Inside function");
// }


// const x = 2;
// exampleFunction();