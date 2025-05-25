// To reference a function object from inside itself; "this" by itself would be insufficient . you need a reference to the function
// object via a lexical identifier (variable) that points to it


function foo(num) {
    console.log("foo: " + num)
    foo.count++;
}


foo.count = 0;;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }

}

console.log('foo count', foo.count)

// issue is for anonymous (no name hence cannot refer to itself) and also side-steps actual understanding of "this"
// and relies on lexical scope of variable foo;

