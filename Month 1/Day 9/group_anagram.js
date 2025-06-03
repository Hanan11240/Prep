// Approach 1 O(n*k*log(k)) Time and O(n*k) Space

// The idea is that if we sort two strings which are anagrams of each other, then the sorted strings will always be the same. So, we can maintain a hash map or dictionary with the sorted strings as keys and the index of the anagram group in the result array as the value.
function anagrams(arr) {

    let result = [];
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let s = arr[i];

        s = s.split('').sort().join('');

        if (!map.has(s)) {
            map.set(s, result.length);
            result.push([]);
        }

        result[map.get(s)].push(arr[i])
    }
    return result
}




let arr = ["listen", "silent", "enlist", "abc", "cab", "bac", "rat", "tar", "art"];

let res = anagrams(arr);
for (let i = 0; i < res.length; i++) {
    console.log(res[i].join(" "));
}