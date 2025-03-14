let obj = {
    fname: 'PTM',
    greet: function () {
        return `Heeeelo ${this.fname}`
    },
    greet2: () => {
        return `Heeeelo ${this.fname}` //this will be undefined in arraow function
    }
}

// you can write a method that can be used on different objects
function greet(hometown) {
    return `Heeeelo ${this.fname} from ${hometown}`
}

let obj2 = {
    fname: 'Shin'
}

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// The bind() creates a refrence of the method and we can use it later

console.log(obj.greet.call(obj2)) // we use call to borrow methods from another obj
console.log(greet.call(obj2, "Dubai"))
console.log(greet.apply(obj2, ["Dubai", "India"])) //we pass argument as array




// ---------------------------------------------------------------

const person = {
    firstName: "John",
    lastName: "Doe",
    display: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
person.display()

setTimeout(person.display, 3000); //When a function is used as a callback, this is lost.
let display = person.display.bind(person);
setTimeout(display, 3000);
