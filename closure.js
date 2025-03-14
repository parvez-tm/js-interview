function x (){
    let b = 10;
    return function y(){
        console.log(b);
    }
}

console.log(x()) // This will return function
let z = x()
z() // This will return 10