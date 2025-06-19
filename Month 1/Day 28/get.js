// In JavaScript, there are two kinds of object properties:

// Data properties
// Accessor properties


// const student = {

// data property
//     firstName: 'Monica';
// }


// Accessor Property
// In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:

// get - to define a getter method to get the property value
// set - to define a setter method to set the property value


// const student = {
//     firstName:"Hanan",
//     get getName(){
//         return this.firstName
//     }   
// }


// console.log(student.getName)
// console.log(student.getName()) //error



// Example 2
const student = {
    firstName: "Hanan",

}



Object.defineProperty(student, "getName", {
    get: function () {
        return this.firstName
    }
})

console.log(student.getName)
