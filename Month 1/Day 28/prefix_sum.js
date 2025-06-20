// create prefix sum

function prefixSum(arr) {

    let preFixArray = new Array(arr.length);
    preFixArray[0] = arr[0];
    let prefixSum = 0;
    for (let i = 1; i < arr.length; i++) {
        prefixSum = preFixArray[i - 1] + arr[i];
        preFixArray[i] = prefixSum;
    }

    return preFixArray

}




console.log(prefixSum([1, 2, 3, 4, 5, 6]))