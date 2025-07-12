
let arr = [3, 1, 2]
function allSubSuquesce(index, ds) {

    if (index >= arr.length) {
        console.log(ds);
        return;
    }

    ds.push(arr[index]);
    allSubSuquesce(index + 1, ds);
    ds.pop();
    allSubSuquesce(index + 1, ds)
}







allSubSuquesce(0, [])