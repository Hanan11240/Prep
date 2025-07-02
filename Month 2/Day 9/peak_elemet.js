// Approach 1 Using Linear Search - O(n) Time and O(1) Space

// function isGreaterThanPrevious(current, previous) {
//     return current > previous
// }


// function isGreaterThanNext(current, next) {
//     return current > next
// }

// function peakElement(arr) {
//     let left = false;
//     let right = false;


//     for (let i = 0; i < arr.length; i++) {

//         if (i > 0 && isGreaterThanPrevious(arr[i], arr[i - 1])) {
//             left = true
//         }

//         if (i > 0 && isGreaterThanNext(arr[i], arr[i + 1])) {
//             right = true;
//         }
//         if (left && right) {
//             return i;
//         }
//     }


//     return -1
// }








// let arr = [1, 2, 4, 5, 7, 8, 3];
// console.log(peakElement(arr));




//Approach 2 Using Binary Search - O(logn) Time and O(1) Space



// function peakElement(arr) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left < right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
//             return mid;
//         }

//         if(arr[mid] > )
//     }
// }


// let arr = [1, 2, 4, 5, 7, 8, 3];
// console.log(peakElement(arr));