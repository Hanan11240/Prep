function deepClone(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj
    }
    if(Array.isArray(obj)){
        return obj.map(deepClone);
    }

    const clone = {};

    for(let key in obj){
        clone[key] = deepClone(obj[key]);
    }

    return clone
}

const original = {
  name: "Ali",
  nested: {
    age: 25,
    hobbies: ["reading", "gaming"]
  }
};

const copy = deepClone(original);
copy.nested.age = 30;
copy.nested.hobbies[0] = "writing";

console.log(original);     
console.log(copy);

// const deepCopy = structuredClone(original);