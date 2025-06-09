function consequetiveOnes(arr) {
    let maximumOnes = -1;
    let onesCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            onesCount++;
            if (onesCount > maximumOnes) {
                maximumOnes = onesCount;
            }
        }
        else {
            onesCount = 0;
        }
    }
    return maximumOnes;
}



console.log(consequetiveOnes([1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1]))



// maximum count of any el in array
// // function maxConsecutiveCount(arr) {
//     let maxCount = 0, count = 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             count++;
//         } else {
//             maxCount = Math.max(maxCount, count);
//             count = 1;
//         }
//     }

//     return Math.max(maxCount, count);
// }

// let arr = [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];
// console.log(maxConsecutiveCount(arr));