// Appproach 1
// Using Two Nested Loops - O(n^2) Time and O(1) Space
// The idea is to count the frequency of each element using nested loops. 

// The first loop iterates through each element of the array, treating it as a the majority element. 
// For each element, the second loop counts its occurrences in the entire array. 
// After the second loop, we check if this element appears more than n / 2 times, where nis the size of the array.
// If it does, it is the majority element in the array.

// function majorityElement(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++;
//             }
//         }

//         if (count > Math.floor(arr.length / 2)) {
//             return arr[i];
//         }
//         count = 0;
//     }
//     return -1
// }



// console.log(majorityElement([2, 13]))


// Approach 2->  Using Sorting - O(n log n) Time and O(1) Space
// The idea is to sort the array so that similar elements are next to each other. Once sorted, go through the array and keep track of how many times each element appears. When you encounter a new element, check if the count of the previous element was more than half the total number of elements in the array. If it was, that element is the majority and should be returned. If no element meets this requirement, no majority element exists.

// Javascript program to find Majority
// element in an array using nested loops

// Function to find the Majority element in an array
// Function to find Majority element in an array
// it returns -1 if there is no majority element
// function majorityElement(arr) {
//     let n = arr.length;
//     arr.sort((a, b) => a - b);

//     let candidate = arr[Math.floor(n / 2)];

//     let count = 0;
//     for (let num of arr) {
//         if (num === candidate) {
//             count++;
//         }
//     }

//     if (count > Math.floor(n / 2)) {
//         return candidate;
//     } else {
//         return -1;
//     }
// }


// let arr = [1, 1, 2, 1, 3, 5, 1];
// console.log(majorityElement(arr));



// Approach 3 Using Hashing - O(n) Time and O(n) Space

// The idea is to use a hash map to count the occurrences of each element in the array. 

// Traverse the array once, and for each element, update its count in the hash map.
// After updating the count, check if count exceeds n / 2.
// If such an element is found, return it immediately.
// If no element's count exceeds n / 2, return-1.




// function majorityElement(arr) {
//     let map = new Map();

//     for (let num of arr) {

//         map.set(num, (map.get(num) || 0) + 1);

//         if (map.get(num) > Math.floor(arr.length / 2)) {
//             return num;
//         }
//     }
//     return -1;

// }




// let arr = [2, 13];
// console.log(majorityElement(arr));


// Approach 4
// [Expected Approach] Using Moore's Voting Algorithm- O(n) Time and O(1) Space
// This is a two-step process:

// The first step gives the element that may be the majority element in the array. If there is a majority element in an array, then this step will definitely return majority element, otherwise, it will return candidate for majority element.
// Check if the element obtained from the above step is the majority element. This step is necessary as there might be no majority element. 


// Follow the steps below to solve the given problem:

// Initialize a candidatevariable and a countvariable.
// Traverse the array once:
// If countis zero, set the candidateto the current element and set countto one.
// If the current element equals the candidate, increment count.
// If the current element differs from the candidate, decrement count.
// Traverse the array again to count the occurrences of the candidate.
// If the candidate's count is greater than n / 2, return the candidate as the majority element.


function majorityElement(arr) {

    let count = 0;
    let candidate = -1;
    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }
    return candidate;
}



let arr = [10, 10, 10, 2, 3, 5, 1, 1, 1];
const candidate = majorityElement(arr);
let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === candidate) {
        count++;
    }

}

if (count > Math.floor(arr.length / 2)) {
    console.log(candidate)
} else {
    console.log(-1)
}