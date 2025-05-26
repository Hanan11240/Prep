// In JavaScript, scope determines where a variable is accessible.
// Function Scope means a variable is only accessible within the function it was declared in. Variables declared with var are function-scoped.
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
