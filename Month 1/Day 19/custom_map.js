function double(el, index, arr) {
    return el + el
}

Array.prototype.MyMap = function (callback) {
    let newArray = [];

    for (let index = 0; index < this.length; index++) {
        newArray.push(callback(this[index], index, this))
    }
    return newArray;
}

const sample = [1, 2, 3];

const result = sample.MyMap(double)
console.log(result)