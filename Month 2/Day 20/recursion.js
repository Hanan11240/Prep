// count pattens with sum k;


const arr = [1, 2, 1];
let k = 2;

function printAllPatterns(index, ds, sum) {


    if (index == arr.length) {
        if (sum === k) {

            return 1

        } else {
            return 0
        }

    }
    ds.push(arr[index]);
    sum += arr[index];

    let l = printAllPatterns(index + 1, ds, sum)


    ds.pop();
    sum -= arr[index];
    let r = printAllPatterns(index + 1, ds, sum)

    return l + r

}


const count = printAllPatterns(0, [], 0);

console.log(count)