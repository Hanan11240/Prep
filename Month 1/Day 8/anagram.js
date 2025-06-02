// Approach 1  O(m*log(m) + n*log(n))
// function areAnagrams(s1, s2) {

//     // Sort both strings
//     s1 = s1.split('').sort().join('');
//     s2 = s2.split('').sort().join('');

//     // Compare sorted strings
//     return s1 === s2;
// }

// const s1 = "geeks";
// const s2 = "kseeg";
// console.log(areAnagrams(s1, s2));



// Approach 2  O(m + n) O(26) = O(1).
function areAnagrams(s1, s2) {

  
    const charCount = {};

   
    for (let ch of s1)
        charCount[ch] = (charCount[ch] || 0) + 1;

   
    for (let ch of s2)
        charCount[ch] = (charCount[ch] || 0) - 1;

    //
    for (let key in charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }

 
    return true;
}

const s1 = "geeks";
const s2 = "kseeg";
console.log(areAnagrams(s1, s2) ? "true" : "false");