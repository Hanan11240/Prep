// Hoisting refers to the process whereby interpreter appears to move the declaration of functions, variables, classes or imports to the top of their scope prior to execution of the code 



// If the const x = 2 declaration is not hoisted at all (as in, it only comes into effect when it's executed), then the console.log(x) statement should be able to read the x value from the upper scope. However, because the const declaration still "taints" the entire scope it's defined in, the console.log(x) statement reads the x from the const x = 2 declaration instead, which is not yet initialized, and throws a ReferenceError
// Example 1 
// const x = 1;
// {
//     // const x = 2;
//     console.log(x);

// }



// Example 2 

// console.log(x);
// var x=3;

// Example 3

// console.log(test());


// function test() {
//     console.log("test");
//     return 1
// }


// Example 4
// var test; // variable is hoisted, but not the function
// test();   // error: test is not a function (test is undefined at this point)
// test = function () {
//     console.log("test");
// };


// test(); --error above is how it is hoisted
console.log(test)
var test = function () {
    console.log("test")
}


