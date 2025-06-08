//Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target. 
// Input: arr[] = [0, -1, 2, -3, 1], target = -2
// Output: true


// Approach 1 o(nlogn) o(1)

// function twoSum(arr, target) {

//     let left = 0;
//     let right = arr.length - 1;
//     arr = arr.sort((a, b) => a - b)
//     while (left < right) {
//         if (arr[left] + arr[right] === target) {
//             return true
//         } else if (arr[left] + arr[right] > target) {
//             right--;
//         } else {
//             left++
//         }
//     }
//     return false;

// }


// console.log(twoSum( [0, -1, 2, -3, 1], -2))



// Approach 2 using hash set o(n) o(n)

function twoSum(arr, target) {
    let set = new Set();
    for (let num of arr) {
        let remaining = target - num;

        if (set.has(remaining)) {
            return true
        }
        set.add(num);
    }

    return false
}
console.log(twoSum([0, -1, 2, -3, 1], -2))