// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model read this

// 

// Example 1
// var n = 5;

// function square(n) {
//   var ans = n * n;
//   return ans;
// }

// var square1 = square(n);
// var square2 = square(8);  

// console.log(square1)
// console.log(square2)



// Example 2 //call stack global -> getResult -> funcb -> funca
function funcA(m,n) {
    return m * n;
}

function funcB(m,n) {
    return funcA(m,n);
}

function getResult(num1, num2) {
    return funcB(num1, num2)
}

var res = getResult(5,6);

console.log(res)