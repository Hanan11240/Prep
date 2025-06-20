// The idea is to sort the array of strings and find the common prefix of the first and last string of the sorted array. Sorting is used in this approach because it makes it easier to find the longest common prefix. When we sort the strings, the first and last strings in the sorted list will be the most different from each other in terms of their characters. So, the longest common prefix for all the strings must be a prefix of both the first and the last strings in the sorted list.


function longestCommonPrefix(arr) {
    let firstEL = arr[0];
    let lastEl = arr[arr.length - 1];
    let i = 0;
    arr = arr.sort();

    let minLength = Math.min(firstEL.length, lastEl.length);
    while (i < minLength && firstEL[i] === lastEl[i]) {
        i++;
    }

    return firstEL.substring(0, i)

}



let arr = ["geeksforgeeks", "geeks", "geek", "geezer"];
console.log(longestCommonPrefix(arr));