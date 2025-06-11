// const foo = ["one", "two", "three"];

// const [red, yellow, blue] = foo;
// console.log(red, yellow, blue)


//------------------ Destructuring with more elements than the source--------------

// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined



// Swapping variables

// let a = 1;
// let b = 3

// [a, b] = [b, a];

// console.log(a,b)


// const arr = [1, 2, 3];

// [arr[2], arr[1]] = [arr[1], arr[2]]

// console.log(arr)


// Parsing an array returned from a function

// function f() {
//     return [1, 2];
// }

// const [a, b] = f();
// console.log(a); // 1
// console.log(b); // 2



// Ignoring some returned values

// function f() {
//     return [1, 2, 3];
// }

// const [a, , c] = f();

// console.log(a,  c)


// Using a binding pattern as the rest property
// The rest property of array destructuring can be another array or object binding pattern. The inner destructuring destructures from the array created after collecting the rest elements, so you cannot access any properties present on the original iterable in this way.

// const [a, b, ...{ length }] = [1, 2, 3]
// console.log(a, b, length)


// const [a, b, ...[c, d]] = [1, 2, 3, 4];
// console.log(a, b, c, d); // 1 2 3 4



// These binding patterns can even be nested, as long as each
//  rest property is the last in the list.
// const [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
// const [a, b, ...[c, d, ...[e, f]]] = [1, 2, 3, 4, 5, 6];

// console.log(a, b,,rest )
// console.log(a, b, c, d, rest)
// console.log(a, b, c, d, e, f)



// const { a, ...{ b } } = { a: 1, b: 2 };
// ... is the rest operator in destructuring — it collects the remaining properties into a new object.

// It must be followed by a valid identifier, like rest, not an object pattern like { b }.
// You cannot do ...{ b } because there's no syntax in JavaScript for destructuring an object inside the rest pattern directly like that.




// Unpacking properties from objects passed as a function parameter

// const user = {
//     id: 42,
//     displayName: "jdoe",
//     fullName: {
//         firstName: "Jane",
//         lastName: "Doe",
//     },
// }

// function userId({ id }) {
//     return id;
// }

// console.log(userId(user)); 

// function userDisplayName({ displayName: dname }) {
//     return dname;
// }

// console.log(userDisplayName(user)); // "jdoe"


// function whois({ displayName, fullName: { firstName: name } }) {
//     return `${displayName} is ${name}`;
// }

// console.log(whois(user)); // "jdoe is Jane"





// ------------------------------------ Setting a function parameter's default value ------------------------

// function drawChart({
//     size = "big",
//     coords = { x: 0, y: 0 },
//     radius = 25,
// } = {}) {
//     console.log(size, coords, radius);

// }

// drawChart({
//     coords: { x: 18, y: 30 },
//     radius: 30,
// });


// Nested object and array destructuring

// const metadata = {
//     title: "Scratchpad",
//     translations: [
//         {
//             locale: "de",
//             localizationTags: [],
//             lastEdit: "2014-04-14T08:43:37",
//             url: "/de/docs/Tools/Scratchpad",
//             title: "JavaScript-Umgebung",
//         },
//     ],
//     url: "/en-US/docs/Tools/Scratchpad",
// };

// const { title, translations: [{ title: tTitle }] } = metadata;

// console.log(title, tTitle)




// For of iteration and destructuring

const people = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith",
        },
        age: 35,
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones",
        },
        age: 25,
    },
];


for (let { name, family: { father } } of people) {
    console.log(name, father)
}


// Computed object property names and destructuring

const key = "z"

const { [key]: foo } = { z: "bar" }

console.log(foo)

