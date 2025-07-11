function swap(arr, start, end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp
}


function reverse(arr, start, end) {

    if (start >= end) {
        return
    }

    swap(arr, start, end);
    return reverse(arr, start + 1, end - 1)

}





const arr = [1, 2, 3, 4, 5, 6,7,8]
reverse(arr, 0, arr.length - 1)

console.log(arr)