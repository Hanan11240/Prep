const input = document.querySelector('input');
const defaultText = document.getElementById('default')
const debounceText = document.getElementById('debounce')
const throttleText = document.getElementById('throttle')

updateDebounceText = debounce((text) => {
    debounceText.textContent = text
}, 1000)


updateThrottleText = throttle((text) => {
    throttleText.textContent = text
}, 1000)

input.addEventListener('input', e => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value)
    updateThrottleText(e.target.value)
})



function debounce(cb, delay = 500) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}


function throttle(cb, delay = 1000) {
    let shouldWait = false;
    let waitingArgs;
    let timeoutFn = () => {
        if (waitingArgs === null) {
            shouldWait = false;
        } else {
            cb(...waitingArgs);
            waitingArgs = null;
            setTimeout(timeoutFn, delay)
        }
    }
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return
        }
        cb(...args);
        shouldWait = true;
        setTimeout(timeoutFn, delay)
    }
}