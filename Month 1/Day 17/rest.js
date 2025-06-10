// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
// function sum(...args) {
//     let total = 0;

//     for (let el of args) {
//         total += el
//     }
//     return total
// }

// console.log(sum(1, 2, 3,4,5))

// There are some additional syntax restrictions:

// A function definition can only have one rest parameter.
// The rest parameter must be the last parameter in the function definition.

// Trailing commas are not allowed after the rest parameter.
// The rest parameter cannot have a default value.


// Example 2
// A function definition's last parameter can be prefixed with ... , which will cause all remaining (user supplied) parameters to be placed within an Array object.

// function myFun(one,two,...otherValues){
//     console.log(one);
//     console.log(two);
//     console.log(otherValues);

// }


// myFun("one", "two", "three", "four", "five", "six");


// Example 3
// The rest parameter may be destructured, which allows you to ignore certain parameter positions.

// function myFun(...[, b, c]) {
//     console.log(b)
//     console.log(c)
// }

// myFun("one", "two", "three");


// all wrong
// function wrong1(...one, ...wrong) {}
// function wrong2(...wrong, arg2, arg3) {}
// function wrong3(...wrong,) {}
// function wrong4(...wrong = []) {}



// The rest parameter is not counted towards the function's length property.

// -------------The difference between rest parameters and the arguments object------------------
// The arguments object is not a real array, while rest parameters are Array instances, meaning methods like sort(), map(), forEach() or pop() can be applied on it directly.
// The arguments object has the additional (deprecated) callee property.
// In a non-strict function with simple parameters, the arguments object syncs its indices with the values of parameters. The rest parameter array never updates its value when the named parameters are re-assigned.
// The rest parameter bundles all the extra parameters into a single array, but does not contain any named argument defined before the ...restParam. The arguments object contains all of the parameters — including the parameters in the ...restParam array — bundled into one array-like object.



// Example 4
function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");

myFun("one", "two", "three");
// a, "one"
// b, "two"
// manyMoreArgs, ["three"] <-- an array with just one value


myFun("one", "two");

// a, "one"
// b, "two"
// manyMoreArgs, [] <-- still an array



myFun("one");

// a, "one"
// b, undefined
// manyMoreArgs, [] <-- still an array


// Example 5
// Argument length

// Since theArgs is an array, a count of its elements is given by the length property. If the function's only parameter is a rest parameter, restParams.length will be equal to arguments.length.

function fun1(...theArgs) {
  console.log(theArgs.length);
}

fun1(); // 0
fun1(5); // 1
fun1(5, 6, 7); // 3



// Example 6

// Using rest parameters in combination with ordinary parameters

function multiply(multiplier, ...theArgs) {
  return theArgs.map((element) => multiplier * element);
}

const arr = multiply(2, 15, 25, 42);
console.log(arr); // [30, 50, 84]

// Array methods can be used on rest parameters, but not on the arguments object: