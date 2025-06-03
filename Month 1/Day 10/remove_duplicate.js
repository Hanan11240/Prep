
// Using Hash Set - Works for Unsorted Also - O(n) Time and O(n) Space
// Use a hash set or dictionary to store elements already processed
// Initialize index of result array as 0.
// Traverse through the input array. If an element is not in the hash set, put it at the result index and insert into the set.

// function removeDuplicates(arr) {

//     let idx = 0;
//     let set = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (!set.has(arr[i])) {
//             set.add(arr[i]);
//             arr[idx++] = arr[i];
//         }
//     }


//     return idx;
// }



// Approach 2 O(n) Time and O(1) Space
// Since the array is sorted, we do not need to maintain a hash set. All occurrences of an element would be consecutive. So we mainly need to check if the current element is same as the previous element or not. 
function removeDuplicates(arr) {
    let idx = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            arr[idx++] = arr[i];
        }
    }
    return idx
}

const arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
const newSize = removeDuplicates(arr);

for (let i = 0; i < newSize; i++) {
    console.log(arr[i])
}