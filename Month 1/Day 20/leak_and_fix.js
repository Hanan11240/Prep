// -------------------------------1: Accidental global variables-------------------------------
// Example 1
function foo(arg) {
    bar = "this is a hidden global variable";
}

// Example 2
// function foo() {
//     this.variable = "potential accidental global";
// }

// ---------------------------------- Forgotten timers or callbacks --------------------------------

// var someResource = getData();
// setInterval(function(){
//         var node = document.getElementById('Node');
//         if(node){
//             //  node.innerHTML = JSON.stringify(someResource));
//         }

// },1000)


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



//c-------------------- 4: Closures -------------------------