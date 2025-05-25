
// hack (creating another object to hold the count)

function foo(num) {
    console.log("foo:  " + num);
    data.count++;
}


var data = {
    count: 0
};

var i;

var i;
for (i = 0; i < 10; i++) {
    if (i > 5) {
        foo(i);
    }

}

console.log('foo count', data.count);

// but ignores the real problem