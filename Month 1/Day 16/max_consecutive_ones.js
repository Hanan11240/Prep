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