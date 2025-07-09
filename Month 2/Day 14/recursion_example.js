// // print nmae n times
// function printName(i, n) {

//     if (i > n) {

//         return
//     }
//     console.log("Hanan")
//     printName(i+1, n )

// }





// printName(1, 5)

// Example 2 print linearly from 1 to N
// function printOnetoN(i, n) {
//     if (i > n) {
//         return
//     }
//     console.log(i);
//     printOnetoN(i + 1, n)
// }


// printOnetoN(1, 5);

// Example 3
function printNtoOne(i, n) {

    if (i > n) {
        return
    }

    printNtoOne(i + 1, n);
    console.log(i)
}



printNtoOne(1, 5)