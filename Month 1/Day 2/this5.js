// confusion 2

// "this" refers to the function's  scope
function foo(){
    var a = 2;
    this.bar()
}

function bar(){
    console.log(this.a);
}


foo();  //reference error