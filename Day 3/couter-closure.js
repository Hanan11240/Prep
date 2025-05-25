function creatCounter() {
    let counter = 0;

    return {
        increament: function () {
            return ++counter;
        },
        decreament: function () {
            if (counter === 0) {
                throw new Error("Counter cannot be less than 0");
            }
            return --counter;
        },
        showCounter: function () {
            return counter;
        }
    };
}

const c = creatCounter();

try {
    console.log(c.increament());  
    console.log(c.decreament());  
    console.log(c.decreament());  
    console.log(c.decreament());  
} catch (error) {
    console.error("Error:", error.message);
}
