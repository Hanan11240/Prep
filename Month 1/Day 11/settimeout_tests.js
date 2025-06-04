// Example 1
// console.log(1)
// setTimeout(() => console.log(2), 0);
// console.log(3)

// Example 2

// setTimeout(() => {
//     console.log('first');
//     setTimeout(() => {
//         console.log('second')
//     }, 10)
// }, 5000);


// Example 3

// setTimeout(() => {
//     console.log('first');
//     setTimeout(() => {
//         console.log('second')
//     }, 5000)
// }, 0);


// Example 4

// setTimeout(() => console.log("Timeout executed"), 0);

// const start = Date.now();
// while (Date.now() - start < 3000) {
//     // this will block thread for 3 seconds
// }

// console.log("After blocking");


// Example 5
const id = setTimeout(() => {
    console.log("set time");
}, 2000);

clearTimeout(id);
console.log("Set timeout cleared");

