// Approach 1  O(n^2) Time and O(1) Space

// The idea is to use two nested loops, the outer loop for picking an element and the inner loop for finding another occurrence of the picked character in the string. As soon as we find a character which has only one occurrence in the input string, return it. If all characters have multiple occurrences, return '$'.
// function nonRep(str) {
//     let elpresent = false;
//     if (!str) {
//         return null
//     }
//     for (let i = 0; i < str.length; i++) {
//         elpresent = false;
//         for (let j = 0; j < str.length; j++) {

//             if (i !== j && str[i] === str[j]) {
//                 elpresent = true;
//                 break
//             }
//         }

//         if (!elpresent) {
//             return str[i]
//         }

//     }
//     return null;
// }





// let s = "geeksforgeeks";
// console.log(nonRep("aabbccddeffg")); // → 'e'
// console.log(nonRep("aabbcc"));       // → null
// console.log(nonRep("abcabcde"));     // → 'd'
// console.log(nonRep("z"));            // → 'z'
// console.log(nonRep(""));             // → null




// Approach 2  By Storing Indices (Single Traversal) – O(n) Time and O(MAX_CHAR ) Space

// The above approach can be optimized using a single traversal of the string. The idea is to maintain a visited array of size MAX_CHAR initialized to -1, indicating no characters have been seen yet. Now, we iterate through the string:

// If a character is seen for the first time, its index is stored in the array. 
// If the character is found again then its array value is set to -2 to represent this character is now repeating. 
// After the string traversal, traverse the visited array and check if value in the array is not equal to -1 or -2 (means, this character is not repeating). We then find the smallest positive index from these values to find the first non-repeating character. If no such index is found, return '$'.


function nonRep(str) {
    const freq = new Array(26).fill(0);

    for (const s of str) {
        freq[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let s of str) {

        if (freq[s.charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            return s;
        }
    }

    return null;

}


let s = "geeksforgeeks";
console.log(nonRep("aabbccddeffg")); // → 'e'
console.log(nonRep("aabbcc"));       // → null
console.log(nonRep("abcabcde"));     // → 'd'
console.log(nonRep("z"));            // → 'z'
console.log(nonRep(""));             // → null
