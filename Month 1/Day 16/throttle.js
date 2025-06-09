function throttle(cb, delay) {
    let lastCall = 0;
    return (...args) => {
        let now = Date.now();
        if (now - lastCall < delay) {
            return
        } else {
            lastCall = now;
            cb(...args)
        }
    }
}


function sendChatMessage(message) {
    console.log(`Sending message `, message);
}


const sendChatMessageWithThrottle = throttle(sendChatMessage, 1000)


let counter = 0
let intervalId = setInterval(() => {
    counter++;
    sendChatMessageWithThrottle(`Hi : ${counter}`)


    if (counter === 10) {
        clearInterval(intervalId);
    }
}, 500)
