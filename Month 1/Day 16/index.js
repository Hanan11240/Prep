const input = document.querySelector('input');
const defaultText = document.getElementById('default')
const debounceText = document.getElementById('debounce')
const throttleText = document.getElementById('throttle')

updateDebounceText = debounce((text) => {
    debounceText.textContent = text
},1000)


input.addEventListener('input', e => {
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value)
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