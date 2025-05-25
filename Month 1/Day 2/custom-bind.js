Function.prototype.myBind = function(thisArg, ...presetArgs) {
  const originalFn = this;

  return function(...laterArgs) {
    return originalFn.apply(thisArg, [...presetArgs, ...laterArgs]);
  };
};

function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };


const greetAlice = greet.myBind(person, 'Hi');

greetAlice('!');  
