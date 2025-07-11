// function swap(arr, start, end) {
//     const temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp
// }


// function reverse(arr, start, end) {

//     if (start >= end) {
//         return
//     }

//     swap(arr, start, end);
//     return reverse(arr, start + 1, end - 1)

// }





// const arr = [1, 2, 3, 4, 5, 6,7,8]
// reverse(arr, 0, arr.length - 1)

// console.log(arr)



// const str = 'AAA';
// function palindrome(i) {

//     if (i >= Math.floor(str.length / 2)) {
//         return true
//     }

//     if (str[i] !== str[str.length - i - 1]) {
//         return false;
//     }

//     return palindrome(i + 1)
// }


const str = 'MADA';
function palindrome(start, end) {

    if (start >= end) {
        return true
    }

    if (str[start] !== str[end]) {
        return false;
    }

    return palindrome(start + 1, end - 1);
}




const start = 0;
const end = str.length - 1
console.log(palindrome(start, end))