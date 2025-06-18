// const Range = (start, end) => ({
//     *[Symbol.iterator]() {
//         while (start < end) {
//             yield start++;
//         }
//     }
// })



// for (let s of Range(1, 10)) {
//     console.log(s)
// }

// Range(start, end) is a function that returns an object.
// The object has a special method named [Symbol.iterator], which is a generator function (* indicates generator).
// When a for...of loop is used on the object returned by Range(...), it automatically looks for [Symbol.iterator] and starts executing that generator function.

// Inside the generator, yield start++ is called in a loop until start reaches end

// [Symbol.iterator]?
// It is a special symbol in JavaScript that defines the default iterator for an object.
// Any object with this method becomes iterable and can be used with for...of, spread syntax, etc.


//  What happens during for...of:

// Range(1, 10) returns an object with a [Symbol.iterator]() method.
// The for...of loop calls that method, getting a generator object (an iterator).

// The loop calls .next() repeatedly on the generator:

// First: start = 1, yields 1, then start++ => 2

// Second: start = 2, yields 2, then start++ => 3


// without generator  pass iterator object manually

const Range = (start, end) => ({
    [Symbol.iterator]() {
        let current = start;
        return {
            next() {
                if (current < end) {
                    return { value: current++, done: false }
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
})

for (const num of Range(5, 10)) {
    console.log(num);
}