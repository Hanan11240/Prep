function merge(arr1, arr2) {
    const arr1length = arr1.length;
    const arr2length = arr2.length;
    let arr3 = []
    let i = 0; let j = 0;

    while (i < arr1length && j < arr2length) {
        if (arr1[i] < arr2[j]) {
            arr3.push(arr1[i])
            i++;
        } else if (arr2[j] < arr1[i]) {
            arr3.push(arr2[j])
            j++;
        } else {
            arr3.push(arr1[i])
            i++;
        }
    }

    while (i < arr1.length) {
        arr3.push(arr1[i])
        i++;
    }


    while (j < arr2.length) {
        arr3.push(arr2[j])
        j++;
    }
    return arr3;

}



console.log(merge([1, 3, 5, 7], [2, 4, 6, 8]))