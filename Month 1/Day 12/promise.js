// when promise constructor is called a new promise object is created
// https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke

new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 100)
})
    .then(result => console.log(result))