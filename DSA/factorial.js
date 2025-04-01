// Factorial with looping
function factorialLoop(num){
    if(num < 0) return "Provide proper digit pls"
    let a = 1;
    for (let i = num; i > 0; i--) {
        a = a*i
    }
    return a
}

// let b = factorialLoop(-5)
// console.log(b,"Ad");


// My Mistake Solution
let numb = 1
function factorialRecursion(num){
    if(num == 1) return numb
        numb = numb * num
        factorialRecursion(num -1)

    return numb

}

function resolvedMistake(num){
    if(num == 1) return 1
    return num * resolvedMistake(num-1)
}

let a = resolvedMistake(5)
console.log(a,"afa");