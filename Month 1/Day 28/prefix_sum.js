// create prefix sum
// It helps to quickly calculate the sum of elements between two indices l and r in an array:




function prefixSum(arr) {

    let preFixArray = new Array(arr.length);
    preFixArray[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        preFixArray[i] = preFixArray[i - 1] + arr[i];

    }

    return preFixArray

}







console.log(prefixSum([1, 2, 3, 4, 5, 6]))

// Common Use Cases
// Range Sum Queries (as explained above)

// Finding number of 1s in binary subarrays

// Cumulative frequency or probability

// 2D Prefix Sum for submatrix sum queries

// Difference arrays (inverse of prefix sum)