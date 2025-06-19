// JavaScript Setter
// In JavaScript, setter methods are used to change the values of an object. For example,


// Example 1

// const student = {
//     firstName: "Hanan",
//     set setName(value) {
//         this.firstName = value;
//     }
// }


// console.log(student);

// student.setName = "Munaqib";

// console.log(student)

// Note: Setter must have exactly one formal parameter.



// Example 2
const student = {
    firstName: "Hanan",

}



Object.defineProperty(student, "setName", {
    set: function (name) {
        this.firstName = name
    }
})

console.log(student);

student.setName = "Ahsan";
console.log(student)

