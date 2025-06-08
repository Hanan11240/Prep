// Approch 1  O(n^2) Time and O(1) Space
// For each starting element, the inner loop iterates through subsequent elements and adding each element to the cumulative sum until the given sum is found or the end of the array is reached. If at any point the cumulative sum equals the given sum, then return starting and ending indices (1-based). If no such sub-array is found after all iterations, then return -1.

// function subarraySum(arr, target) {
//     const result = [];
//     let arrayLength = arr.length;


//     for (let i = 0; i < arrayLength; i++) {
//         let curr = 0;

//         for (let j = i; j < arrayLength; j++) {
//             curr += arr[j];

//             if (curr === target) {
//                 result.push(i + 1)
//                 result.push(j + 1)
//                 return result
//             }
//         }
//     }
//     return [-1]
// }




// let arr = [15, 2, 4, 8, 9, 5, 10, 23];
// let target = 23;
// let res = subarraySum(arr, target);

// console.log(res.join(' '));




// Approach 2  O(n) Time and O(1) Space

// The idea is simple, as we know that all the elements in subarray are positive so, If a subarray has sum greater than the given sum then there is no possibility that adding elements to the current subarray will be equal to the given sum. So the Idea is to use a similar approach to a sliding window. 

// Start with an empty window 
// add elements to the window while the current sum is less than sum 
// If the sum is greater than sum, remove elements from the start of the current window.
// If current sum becomes same as sum, return the result

// Function to find a continuous sub-array which adds up to
// a given number.
function subarraySum(arr, target) {
    
    // Initialize window
    let s = 0, e = 0;
    let res = [];

    let curr = 0;
    for (let i = 0; i < arr.length; i++) {
        curr += arr[i];

        // If current sum becomes more or equal,
        // set end and try adjusting start
        if (curr >= target) {
            e = i;

            // While current sum is greater, 
            // remove starting elements of current window
            while (curr > target && s < e) {
                curr -= arr[s];
                s++;
            }

            // If we found a subarray
            if (curr === target) {
                res.push(s + 1);
                res.push(e + 1);
                return res;
            }
        }
    }
    // If no subarray is found
    return [-1];
}

// Driver Code
let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let target = 23;
let res = subarraySum(arr, target);

console.log(res.join(' '));

