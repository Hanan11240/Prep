// Approach 1  O(n^2) Time and O(1) Space

// The idea is to use two nested loops, the outer loop for picking an element and the inner loop for finding another occurrence of the picked character in the string. As soon as we find a character which has only one occurrence in the input string, return it. If all characters have multiple occurrences, return '$'.
function nonRep(str) {
    let elpresent = false;
    if (!str) {
        return null
    }
    for (let i = 0; i < str.length; i++) {
        elpresent = false;
        for (let j = 0; j < str.length; j++) {

            if (i !== j && str[i] === str[j]) {
                elpresent = true;
                break
            }
        }

        if (!elpresent) {
            return str[i]
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