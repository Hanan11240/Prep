// stating directly what you want the this to be (explicit binding)
// function foo() {
//     console.log(this.a);
// }

// var obj = { a: 2 };


// foo.call(obj);


// this will force binding of foo to obj1 (hard binding)
// function foo() {
//     console.log(this.a);
// }

// var obj = { a: 2 };
// var obj2 = { a: 4 }

// var bar = function () {
//     foo.call(obj)
// }


// bar();
// bar.call(obj2)

//-------the most typical way to wrap a function with hard binding creates a pass-through of any arguments passed and any return value received

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }


// var obj = { a: 2 };


// var bar = function () {
//     return foo.apply(obj, arguments)
// }

// var b = bar(3);
// console.log(b);



// ----new example

// function foo(something) {
//     console.log(this.a, something);
//     return this.a + something;
// }


// function bind(callback, obj) {
//     return function () {
//         return callback.apply(obj, arguments);
//     }
// }

// var obj = { a: 2 };

// var bar = bind(foo, obj);
// var b = bar(3);
// console.log(b)

// Api call context


function foo(el) {
    console.log(el, this.id)
}

var obj = {
    id: "awesome"
}


[1, 2, 3].forEach(foo, obj);