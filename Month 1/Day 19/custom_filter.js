function greaterThanTwo(el, index, arr) {
    return el > 2
}

Array.prototype.myFilter = function (callback) {
    let filteredArr = [];
    for (let index = 0; index < this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filteredArr.push(this[index]);
        }
    }

    return filteredArr
}


const arr = [1, 2, 3];

const result = arr.myFilter(greaterThanTwo)
console.log(result)