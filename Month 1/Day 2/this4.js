// another way is to force "this" to actually point to the foo object
function foo(num) {
    console.log("foo: " + num)
    this.count++;
}


foo.count = 0;;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo.call(foo, i);
    }

}

console.log('foo count', foo.count)