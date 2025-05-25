// The call method allows you to invoke a function with an explicit this value and arguments provided individually.
// func.call(thisArg, arg1, arg2, ...)
// function showProfileMessage(message) {
//     console.log(this.name + " "+ message)
// }






// const myObj = {
//     name: "Hanan"
// }

// showProfileMessage.call(myObj, "Welcome");


// custom call


Function.prototype.myCall = function (context, ...args) {
    context = context || globalThis;

    const fnSymbol = Symbol();

    context[fnSymbol] = this;

    const result = context[fnSymbol](...args)

    delete fnSymbol;
    return result;
}



const obj = { name: "Hanan" };

function myName(message) {
    console.log(message + " " + this.name);
}

myName.myCall(obj, "Welcome")