
// Approach O(n*n*m) Time and O(1) Space
// function intersection(arr1, arr2) {
//     let result = [];


//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {

//             if (arr1[i] === arr2[j]) {
//                 let present = false;
//                 for (let k = 0; k < result.length; k++) {
//                     if (arr1[i] === result[k]) {

//                         present = 1
//                         break;
//                     }
//                 }
//                 if (!present) {
//                     result.push(arr1[i])
//                 }

//             }
//         }
//     }

//     return result;
// }


// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];

// let res = intersection(a, b);
// console.log(res)


// Approach 2 O(n*m) Time and O(n) Space

// function intersection(arr1, arr2) {
//     let set = new Set();
//     let result = [];

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {

//             if (arr1[i] === arr2[j]) {

//                 set.add(arr1[i])

//             }
//         }
//     }

//     for (const el of set) {
//         result.push(el)
//     }
//     return result;
// }


// const a = [1, 2, 3, 4];
// const b = [3, 4, 5, 6];

// let res = intersection(a, b);
// console.log(res)


// Approach 3 O(n+m) Time and O(n) Space




function intersection(arr1, arr2) {
    let set = new Set(arr1);
    let result = [];

    for (let i = 0; i < arr2.length; i++) {

        if (set.has(arr2[i])) {
            result.push(arr2[i])
            set.delete(arr2[i])
        }
    }
    return result
}


const a = [1, 2, 3, 4];
const b = [3, 4, 5, 6];

let res = intersection(a, b);
console.log(res)
