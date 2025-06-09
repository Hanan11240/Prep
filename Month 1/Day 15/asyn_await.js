//async fucntion always returns promise.
//if you don't return a promise the async function will wrap that value in promise a return it.


// Example 1

// async function getData(params) {
//     return "Asalamu Alikum";
// }

// const data = getData();
// data.then((result) => console.log(result))

// Example 2 

// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved")
// })


// async function getData() {
//     const val = await p;
//     console.log(val)
// }

// getData();



// Example 3

// const p = new Promise((resolve, reject) => {
//    setTimeout(()=>{
//      resolve("Promise resolved")
//    },1000)
// })


// async function getData() {
//     const val = await p;
//     console.log(val)
// }

// getData();



// Example 4
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 1000)
// })


// function handlePromise() {
//     p.then((data) => console.log(data));
//     console.log("Asalamu alikum")
// }

// handlePromise();
// async function handlePromise() {
//     const val = await p;

//     console.log("Asalamu alikum");
//     console.log(val)
// }

// handlePromise();


// Example 5

// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 3000)
// })


// async function getData() {
//     console.log('first')
//     const val = await p;
//     console.log('Asalamu alikum')
//     console.log(val)

//     const val1 = await p;
//     console.log('Asalamu alikum 1')
//     console.log(val1)
// }

// getData();

// Example 6
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved")
//     }, 5000)
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise resolved 2")
//     }, 1000)
// })


// async function getData() {
   
//     const val = await p1;
//     console.log('Asalamu alikum 1')
//     console.log(val)

//     const val1 = await p2;
//     console.log('Asalamu alikum 2')
//     console.log(val1)
// }

// getData();



// Example 7


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved")
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved 2")
    }, 4000)
})


async function getData() {
   
    const val = await p1;
    console.log('Asalamu alikum 1')
    console.log(val)

    const val1 = await p2;
    console.log('Asalamu alikum 2')
    console.log(val1)
}

getData();



// Every JavaScript Promise is an object. Internally, it has a state:
// This state is stored inside the Promise object itself.
// When you do await p, JavaScript checks the internal state:

// If it's pending, it waits.

// If it's fulfilled, it immediately returns the stored value.

// If it's rejected, it throws the error.