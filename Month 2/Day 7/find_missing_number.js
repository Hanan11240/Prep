function missingNum(arr) {
    const n = arr.length + 1;
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        sum += arr[i];
    }

    let expectedSum = (n * (n + 1)) / 2;



    return expectedSum - sum

}



let arr = [8, 2, 4, 5, 3, 7, 1];
console.log(missingNum(arr));