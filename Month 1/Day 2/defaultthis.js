// Example 1
// function foo() {
//     console.log(this.a);
// }

// var a = 2;


// foo(); // in nonstrict mode it will console 2 and in strict mode it will console undefined

// Example 2
// function foo(){
//     "use strict"
//         console.log(this.a); // undefined since strict mode is used
// }

// var a=2;

// foo();

//global object is only eleigible for the default binding if the contents of foo are not runnin gin strict mode

function foo() {
    console.log(this.a);
}

var a = 2;

(function (){
    "use strict"
    foo() // console 2 since content of foo are not running non-strict mode
})()