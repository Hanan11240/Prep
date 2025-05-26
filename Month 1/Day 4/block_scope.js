// Block Scope means a variable is only accessible within the block {} it was declared in. Variables declared with let and const are block-scoped.
// let and const respect both function and block boundaries.

function example() {
    if (true) {
        var x = 10;
        let y = 20;
        const z = 30;
    }
    console.log(x); // ✅
    console.log(y); // ❌ 
    console.log(z); // ❌ 
}
