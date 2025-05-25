function reversString(str) {
    const arr = str.split('');
    let left = 0;
    let right = arr.length-1;
    let temp = '';
    while (left < right) {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
   return arr.join('')
};


console.log(reversString('strings'));