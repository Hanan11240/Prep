function myNew(constructorFn, ...args) {
    const obj = {};

    Object.setPrototypeOf(obj, constructorFn.prototype);
    const result = constructorFn.apply(obj, args);
    console.log(result)
    console.log(obj)

    return (typeof result === 'object' && result !== null) ? result : obj
}


function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Object.setPrototypeOf(obj, constructorFn.prototype); if this is not there  user.test will be undefined since there is no link between obj and Person prototype
Person.prototype.test = 2

const user = myNew(Person, "Alice", 30);
console.log(user);
console.log(user instanceof Person);
console.log(user?.test)