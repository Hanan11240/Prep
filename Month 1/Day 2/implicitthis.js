// if the call site has a context-object 

// Example 1
// function foo() {
//     console.log(this.a);
// }


// var obj = { a: 2, foo: foo };


// obj.foo();


//only the top/last level  of the object property reference chain matters to the call-site;-----------------

// function foo() {
//     console.log(this.b);
// }

// var obj1 = { a: 2, foo: foo, b: 3 };

// var obj2 = { a: 3, foo: foo };

// obj1.obj2 = obj2;
// obj2.obj1 = obj1;
// obj1.obj2.foo()


//implicit lost------------------------------------------------

function foo() {
    console.log(this.a);
}

var obj = { a: 2, foo: foo };

var bar = obj.foo; // funtion refrence is passed
bar();
//call site is what matters  and call site is bar() which is plain undecorated call and thus  the default binding applies



//anotehr exmaple using callback

// function foo() {
//     console.log(this.a);
// }



// function doFoo(callback) {
//     callback();
// }


// var obj = {
//     a: 2,
//     foo: foo

// }

// var a = "oops,global implicit lost";

// doFoo(obj.foo);