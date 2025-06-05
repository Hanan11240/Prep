// Macrotasks (also called tasks) are units of work that are scheduled to be executed by the event loop after the current execution context is complete and after all microtasks have been processed.

// The term macrotask comes from the HTML Living Standard maintained by WHATWG. In the spec, it’s referred to as part of the "task queue":

// Tasks are also sometimes referred to as macrotasks, especially in contrast to microtasks like promise callbacks.
// setTimeout, setInterval, DOM events

// Example 1
// function recap() {
//     setTimeout(() => console.log(2), 0);
//     console.log(3)
// }

// console.log(1);
// recap();
// console.log(4)



// Example 2

function isClear() {
    setTimeout(() => console.log(2), 0);
    new Promise((resolve) => {
        console.log(3);
        resolve();
    })
        .then(() => {
            console.log(4);
        })
        .then(() => { console.log(5) })
        .then(() => { console.log(6) })
    console.log(7);
}


console.log(1);
isClear();
console.log(8);

//1  3 7 8 4 5 6 2