// Approach 1 Concatenate and Sort - O((n1 + n2) log(n1 + n2)) time and O(1) space
// function mergeArrays(arr1, arr2) {
//     let arr3 = arr1.concat(arr2);
//     arr3.sort((a, b) => a - b);
//     return arr3;
// }

// // Driver code
// let arr1 = [1, 3, 5, 7];
// let arr2 = [2, 4, 6, 8];
// let arr3 = mergeArrays(arr1, arr2);

// console.log(arr3.join(" "));



// Approach 2  Sort O(n1 + n2) time and O(n1 + n2) space

function mergeArrays(arr1, arr2) {
    let arr3 = new Array(arr1.length + arr2.length);
    let left = 0
    let right = 0
    let k = 0;


    while (left < arr1.length && right < arr2.length) {
        if (arr1[left] < arr2[right]) {
            arr3[k++] = arr1[left++];
           
        } else if (arr1[left] > arr2[right]) {
            arr3[k++] = arr2[right++];
        
        } else {
            arr3[k++] = arr1[left++];
       
            
        }
    }

    while (left < arr1.length) {
        arr3[k++] = arr1[left++];
        
    }

    while (right < arr2.length) {
        arr3[k++] = arr2[right++];
     
    }

    return arr3;

}

const ar1 = [1, 3, 5, 7];
const ar2 = [2, 4, 6, 8];
const ar3 = mergeArrays(ar1, ar2);

console.log(ar3)