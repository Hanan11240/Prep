// Example 1


// const longitudeEl = document.getElementById('longitude')
// const latitudeEl = document.getElementById('latitude')

// function getCurrentPosition() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }

// async function getUsertPosition() {
//     try {
//         const location = await getCurrentPosition();

//         const { coords } = location

//         const { latitude, longitude } = coords;

//         latitudeEl.textContent = latitude
//         longitudeEl.textContent = longitude

//     } catch (error) {
//         console.log(error)
//     }
// }


// getUsertPosition();


// Example 2

Promise.resolve().then(() => console.log(1));
setTimeout(() => console.log(2), 10);
queueMicrotask(() => {
    console.log(3),
        queueMicrotask(() => console.log(4))
})

console.log(5)