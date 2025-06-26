//  Approach 1-- 
// Using Stack - O(n) Time and O(n) Space
// The idea is to put all the opening brackets in the stack. Whenever you hit a closing bracket, search if the top of the stack is the opening bracket of the same nature. If this holds then pop the stack and continue the iteration. In the end if the stack is empty, it means all brackets are balanced or well-formed. Otherwise, they are not balanced. 


function isBalanced(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else {
            if ((stack[stack.length - 1] === '(' && s[i] === ')') || (stack[stack.length - 1] === '{' && s[i] === '}') || (stack[stack.length - 1] === '[' && s[i] === ']') && stack.length > 0) {
                stack.pop();
            } else {
                return false;
            }
        }
    }


    return stack.length === 0
}



let s = "[()()]{}";
console.log(isBalanced(s) ? "true" : "false");