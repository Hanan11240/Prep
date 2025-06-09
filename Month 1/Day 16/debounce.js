const input = document.querySelector('input')
const debounceEl = document.getElementById('debounce')

function debounce(cb, delay) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            cb(...args)
        }, delay);
    }
}


const search = (query) => {
    console.log(`Searching ${query}`);
    debounceEl.textContent = query

}


const searchWithDebounce = debounce(search, 1000);


input.addEventListener('input', e => {
    searchWithDebounce(e.target.value)
})

