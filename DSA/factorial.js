// Factorial with looping
function factorialLoop(num){
    if(num < 0) return "Provide proper digit pls"
    let a = 1;
    for (let i = num; i > 0; i--) {
        a = a*i
    }
    return a
}

let b = factorialLoop(-5)
console.log(b,"Ad");