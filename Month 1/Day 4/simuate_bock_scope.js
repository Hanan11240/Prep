// To simulate block scope in JavaScript (especially before ES6 when let and const were not available), developers used Immediately Invoked Function Expressions (IIFEs).

// (function () {
//     var x = 10;
//     console.log(x);
// })();

// console.log(typeof x);


// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }

// funcs[0](); // 3
// funcs[1](); // 3
// funcs[2](); // 3




// var funcs = [];

// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     funcs.push(function () {
//       console.log(j);
//     });
//   })(i); // Pass i to an IIFE, creating a new scope
// }

// funcs[0](); // 0
// funcs[1](); // 1
// funcs[2](); // 2




for (var i = 0; i < 3; i++) {
    (function (j) {
        setTimeout(() => console.log(j), 100);
    })(i);
}
