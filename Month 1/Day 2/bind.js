
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}


const person = {
  name: 'Alice'
};


const greetAlice = greet.bind(person);


greetAlice('Hello', '!'); 
