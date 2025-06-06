// Approch 1  O(n^2) Time and O(1) Space
// For each starting element, the inner loop iterates through subsequent elements and adding each element to the cumulative sum until the given sum is found or the end of the array is reached. If at any point the cumulative sum equals the given sum, then return starting and ending indices (1-based). If no such sub-array is found after all iterations, then return -1.

function subarraySum(arr, target) {
    const result = [];
    let arrayLength = arr.length;


    for (let i = 0; i < arrayLength; i++) {
        let curr = 0;

        for (let j = i; j < arrayLength; j++) {
            curr += arr[j];

            if (curr === target) {
                result.push(i + 1)
                result.push(j + 1)
                return result
            }
        }
    }
    return [-1]
}




let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let target = 23;
let res = subarraySum(arr, target);

console.log(res.join(' '));
