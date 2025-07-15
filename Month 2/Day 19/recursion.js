// print only one patterns with sum k;


const arr = [1, 2, 1];
let k = 2;

function printAllPatterns(index, ds, sum) {


    if (index == arr.length) {
        if (sum === k) {
            console.log(ds)
            return true

        } else {
            return false
        }

    }
    ds.push(arr[index]);
    sum += arr[index];
    if (printAllPatterns(index + 1, ds, sum)) {
        return true;
    }

    ds.pop();
    sum -= arr[index];
    if (printAllPatterns(index + 1, ds, sum)) {
        return true;
    }
    return false;

}





printAllPatterns(0, [], 0)