// https://www.geeksforgeeks.org/introduction-to-recursion-2/

// Example 1
function sum(n) {

    if (n === 1) {
        return 1
    }

    return n + sum(n - 1);

}




console.log(sum(5))


function fact(n) {

    if (n === 0) {
        return 1;
    }

    return n * fact(n - 1);
}

console.log(fact(5))