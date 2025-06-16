// -------------------------------1: Accidental global variables-------------------------------
// Example 1
// memory leak
function foo(arg) {
    bar = "this is a hidden global variable";
}

// fix
// function foo(arg) {
//     let bar = "this is a local variable";
// }


// Example 2

// function foo() {
//     this.variable = "potential accidental global";
// }

// fix

// Use a factory function (better in many modern JS apps)
// function createFoo() {
//     return {
//         variable: "factory pattern"
//     };
// }

// const obj = createFoo();
// console.log(obj.variable);

// ---------------------------------- Forgotten timers or callbacks --------------------------------

// memory leak
// var someResource = getData();
//    setInterval(function(){
//         var node = document.getElementById('Node');
//         if(node){
//             //  node.innerHTML = JSON.stringify(someResource));
//         }

// },1000)

// fix
// var someResource = getData(); // Assume this is large data

// let intervalId = setInterval(function () {
//     var node = document.getElementById('Node');

//     if (node) {
//         node.innerHTML = JSON.stringify(someResource);
//     } else {
//         // Cleanup to prevent memory leaks
//         clearInterval(intervalId);
//         someResource = null; // Allow garbage collection
//     }
// }, 1000);


// ----------------------------- 3: Out of DOM references -------------------------------
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
};

function doStuff() {
    image.src = 'http://some.url/image';
    button.click();
    console.log(text.innerHTML);
    // Much more logic
}

function removeButton() {
    // The button is a direct child of body.
    document.body.removeChild(document.getElementById('button'));

    // At this point, we still have a reference to #button in the global
    // elements dictionary. In other words, the button element is still in
    // memory and cannot be collected by the GC.
}



//-------------------- 4: Closures -------------------------