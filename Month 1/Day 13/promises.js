// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

// Exampe 1
// new Promise(() => { })
// // {
// //     __proto__: Promise;
// //     promiseState: "pending" // fulfilled | rejected | pending
// //     promiseResult: undefined


// // }


// image 1


// Example 2
// new Promise((res, rej) => res("Hi!"))

// // {
// //     __proto__: Promise;
// //     promiseState: "fulfilled" // fulfilled | rejected | pending
// //     promiseResult: "Hi!"


// // }

// new Promise((res, rej) => rej("No!"))

// // {
// //     __proto__: Promise;
// //     promiseState: "rejected" // fulfilled | rejected | pending
// //     promiseResult: "No!"


// // }

// Example 3

function getImages(image) {
    return new Promise((resolve, reject) => {
        try {
            const data = readFile(image);
            resolve(data)
        } catch (error) {
            reject(new Error(error))
        }
    })
}

getImages('./image1.png')