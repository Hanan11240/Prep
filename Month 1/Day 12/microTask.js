function isClear() {
    setTimeout(() => console.log(2), 0);

    queueMicrotask(() => {
        console.log(3);
        queueMicrotask(() => {
            console.log(4);
        })
    })
    queueMicrotask(() => {
        console.log(5);
    })
    queueMicrotask(() => {
        console.log(6)
    })
    console.log(7);
}


console.log(1);
isClear();
console.log(8);
// 1 7 8 3 5 6 4 2