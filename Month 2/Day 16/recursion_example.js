//  sum of n natural numbers

// function sum(n) {
//     if (n === 1) {
//         return 1;
//     }

//     return n + sum(n - 1)
// }
// console.log(sum(5))


// function sumOfN(i, sum) {

//     if (i < 1) {
//         console.log(sum)
//         return
//     }

//     sumOfN(i - 1, sum + i)
// }


// sumOfN(5, 0)


// factorial 


// function factorial(n) {

//     if (n === 1) {
//         return 1
//     }
//     return n * factorial(n - 1)



// }




// console.log(factorial(5))



function factorial(i, fac) {

    if (i < 1) {
        console.log(fac)
        return
    }
     factorial(i - 1, i * fac)



}


factorial(5, 1)





