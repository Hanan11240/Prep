// def-> this is actually a binding that is made when a function is invoked and what it refrences is determined entirely by the call-site
// where the fucntion is invoked






// confusion
// the first common temptation is to assume this refers to the fucntion itself;
// why would you want to refer to a function from inside itself?
// 1.Recursion to call itself
// Example 

function foo(num) {
    console.log("foo: " + num)
    this.count++;
}


foo.count = 0;;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }

}

console.log('foo count', foo.count)
// when code executes foo.cont=0, indeed its adding a property count to the function object foo.But for the this.count reference inside of the function, this 
// is  not in fact pointing at all to that function object





