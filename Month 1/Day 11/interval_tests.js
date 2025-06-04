// Example 1
// let count = 0;

// const intervalId = setInterval(() => {
//     console.log(`Iterval: ${++count}`);
//     if (count == 3) {
//         clearInterval(intervalId);
//     }
// }, 1000)

// Exampe 2
// console.log("Start");

// setInterval(() => {
//     console.log("Interval fired!");
// }, 1000);

// console.log("End");



// Example 3
// If you block the event loop, interval delays get stacked.
let count = 0;
setInterval(() => {
    console.log(++count)
    // console.log("Ping:", new Date().toLocaleTimeString())
}, 1000);

const start = Date.now();
while (Date.now() - start < 5000) {
    // block for 5 seconds
}

console.log("Unblocked")
