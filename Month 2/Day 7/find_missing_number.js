

// Approach 1 
function missingNum(arr) {
    const n = arr.length + 1;
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        sum += arr[i];
    }

    let expectedSum = (n * (n + 1)) / 2;



    return expectedSum - sum

}



let arr = [8, 2, 4, 5, 3, 7, 1];
console.log(missingNum(arr));


// Approach 2
// [Expected Approach 2] Using XOR Operation - O(n) Time and O(1) Space
//  XOR of a number with itself is 0 i.e. x ^ x = 0 and the given array arr[] has numbers in range [1, n]. This means that the result of XOR of first n natural numbers with the XOR of all the array elements will be the missing number. To do so, calculate XOR of first n natural numbers and XOR of all the array arr[] elements, and then our result will be the XOR of both the resultant values.



// Understand
// function missingNum(arr) {
//     let n = arr.length + 1;

//     // Calculate the sum of array elements
//     let sum = 0;
//     for (let i = 0; i < n - 1; i++) {
//         sum += arr[i];
//     }

//     // Calculate the expected sum
//     let expSum = (n * (n + 1)) / 2;

//     // Return the missing number
//     return expSum - sum;
// }

// // driver code 
// let arr = [8, 2, 4, 5, 3, 7, 1];
// console.log(missingNum(arr));