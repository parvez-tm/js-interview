function test(n){
    console.log(n) // head recursion (to right logic before recursion)
    if(n<5){
        test(n+1)
    }
    console.log(n) // tail recursion
}

test(1)