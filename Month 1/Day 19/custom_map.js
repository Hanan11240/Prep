function double(el, index, arr) {
    return el + el
}

Array.prototype.MyMap = function (callback) {
    let mappedArray = [];

    for (let index = 0; index < this.length; index++) {
        mappedArray.push(callback(this[index], index, this))
    }
    return mappedArray;
}

const sample = [1, 2, 3];

const result = sample.MyMap(double)
console.log(result)