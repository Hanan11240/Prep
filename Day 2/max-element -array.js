function max(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}


console.log(max([99999,0, -1, 2,9999999999, 5, 10, 1,999]))