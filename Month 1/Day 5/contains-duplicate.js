// Approach 1

// o(n2) o(1)
// function hasDuplicate(arr) {
//     let arrayLength = arr.length;

//     for (let i = 0; i < arrayLength; i++) {
//         for (j = i + 1; j < arrayLength; j++) {
//             if (arr[i] === arr[j]) {
//                 return true
//             }
//         }
//     }
//     return false

// }



// Approach 2 o(n), o(n)

// function hasDuplicate(arr) {

//     let set = new Set();
//     for (let num of arr) {
//         if (set.has(num)) {
//             return true;
//         } else {
//             set.add(num)
//         }
//     }
//     return false
// }


//Approach 3 o(nlogn) o(1)

function hasDuplicate(arr) {
    arr.sort((a, b) => a - b);

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return true
        }
    }
    return false
}



console.log(hasDuplicate([4, 5, 6, 4]))