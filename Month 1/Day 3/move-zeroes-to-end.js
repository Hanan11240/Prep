

// Approach 1 o(n) o(n)
// function movezeroes(arr) {

//     const length = arr.length;
//     let temp = new Array(length);
//     let j = 0;

//     for (let i = 0; i < length; i++) {
//         if (arr[i] !== 0) {

//             temp[j++] = arr[i]
//         }
//     }
//     while (j < length) {
//         temp[j++] = 0
//     }

//     return temp;
// }

// const arr = [1, 2, 0, 4, 3, 0, 5, 0];
// console.log(movezeroes(arr))

//Approach 2 o(n) o(1)
function movezeroes(arr) {

    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            j = i
            break;
        }
    }
    let i = 0
    for (i = j + 1; i < arr.length; i++) {
        if (arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

const arr = [1, 0,2,3,2,0,0,4,5,1];
console.log(movezeroes(arr))