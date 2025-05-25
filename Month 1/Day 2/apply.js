// Syntax: function.apply(thisArg, [argsArray])
// Use: Invokes the function immediately with this set to thisArg.
// Arguments: Passed as an array (or array-like object).


function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}


const person = {
  name: 'Alice'
};


greet.apply(person, ['Hi', '.']); 
