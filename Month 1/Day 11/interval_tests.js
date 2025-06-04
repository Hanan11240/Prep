let count = 0;

const intervalId = setInterval(() => {
    console.log(`Iterval: ${++count}`);
    if (count == 3) {
        clearInterval(intervalId);
    }
}, 1000)