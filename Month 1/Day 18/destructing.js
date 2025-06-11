// let a, b, rest;
// [a, b] = [12, 20];
// console.log(a, b);

// [a,b,...rest] = [1,2,3,4,5,6,7,8,9];

// console.log(rest)

// The destructuring uses similar syntax but uses it on the left-hand side of the assignment instead

// const arr = [1, 2, 3];

// const [a, b, c] = arr;

// console.log(a, b, c)


// const obj = { a: 1, b: 2, c: 3 };
// const { a, b, c } = obj;

// console.log(a, b, c)


//----------------------- Binding and assignment-------------------
// For both object and array destructuring, there are two kinds of destructuring patterns: binding pattern and assignment pattern, with slightly different syntaxes.


// In binding patterns, the pattern starts with a declaration keyword (var, let, or const). Then, each individual property must either be bound to a variable or further destructured.

// const obj = { a: 1, b: { c: 2 } };

// const { a, b: { c: d } } = obj;
// d = 4
// console.log(a, d);
// Two variables are bound: `a` and `d`



// All variables share the same declaration, so if you want some variables to be re-assignable but others to be read-only, you may have to destructure twice — once with let, once with const.


// const obj = { a: 1, b: { c: 2 } }

// const { a } = obj;

// let { b: { c: d } } = obj

// d = 3
// console.log(a, d)



// In assignment patterns, the pattern does not start with a keyword. Each destructured property is assigned to a target of assignment — which may either be declared beforehand with var or let, or is a property of another object — in general, anything that can appear on the left-hand side of an assignment expression.


// const numbers = [];
// const obj = { a: 1, b: 2 };

// ({ a: numbers[0], b: numbers[1] } = obj)
// console.log(numbers);

// Note: The parentheses ( ... ) around the assignment statement are required when using object literal destructuring without a declaration.

// { a, b } = { a: 1, b: 2 } is not valid stand-alone syntax, as the { a, b } on the left-hand side is considered a block and not an object literal according to the rules of expression statements. However, ({ a, b } = { a: 1, b: 2 }) is valid, as is const { a, b } = { a: 1, b: 2 }.

// If your coding style does not include trailing semicolons, the ( ... ) expression needs to be preceded by a semicolon, or it may be used to execute a function on the previous line.







// Note that the equivalent binding pattern of the code above is not valid syntax:

// const numbers = [];
const obj = { a: 1, b: 2 };
// const { a: numbers[0], b: numbers[1] } = obj;

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.



// Default value
// Each destructured property can have a default value.The default value is used when the property is not present, or has value undefined.It is not used if the property has value null.

// const [a = 1] = []
// const { b = 2 } = { b: undefined }
// const { c = 3 } = { c: null }
// console.log(a, b, c)


// The default value can be any expression. It will only be evaluated when necessary.

// const { b = console.log("hy") } = { b: 2 }
// console.log(b)
// // Does not log anything, because `b` is defined and there's no need
// // to evaluate the default value.



// Rest properties and rest elements    
// More formally, the ...rest syntax is called "rest elements" in array destructuring and "rest properties" in object destructuring, but we often just collectively call them "rest property".  

// const { a, ...rest } = { a: 2, b: 2, c: 3 }

// console.log(a)
// console.log(rest)


// const [first, ...others2] = [1, 2, 3];
// console.log(others2); // [2, 3]



// The rest property must be the last in the pattern, and must not have a trailing comma.

// const [a, ...b,] = [1, 2, 3];

// SyntaxError: rest element may not have a trailing comma
// Always consider using rest operator as the last element
