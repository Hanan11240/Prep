// print all patterns with sum k;


const arr = [3, 1, 2];
let k = 2;

function printAllPatterns(index, ds, sum) {


    if (index == arr.length) {
        if (sum === k) {
            console.log(ds)

        }
        return
    }
    ds.push(arr[index]);
    sum += arr[index];
    printAllPatterns(index + 1, ds, sum);

    ds.pop();
    sum -= arr[index];
    printAllPatterns(index + 1, ds, sum)

}





printAllPatterns(0, [], 0)