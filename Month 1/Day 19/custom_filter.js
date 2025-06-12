function greaterThanTwo(el, index, arr) {
    return el > 2
}

Array.prototype.myFilter = function (callback) {
    let newArray = [];
    for (let index = 0; index < this.length; index++) {
        let result = callback(this[index]);
        if (result) {
            newArray.push(this[index], index, this)
        }
    }

    return newArray
}


const arr = [1, 2, 3];

const result = arr.myFilter(greaterThanTwo)
console.log(result)