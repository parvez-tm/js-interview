let money = 100
let apple = 0

// Direct Recursion 
function buyApple(m) {
    console.log('Apple: ' + apple, 'Money: ' + m)
    if (m > 0) {
        apple++
        m = m - 10
        buyApple(m)
    }
}

// buyApple(money)

// Indirect Recursion 
function getApple(m){
    console.log('Apple: ' + apple, 'Money: ' + m)
    if(m > 0){
        m = m - 20
        buyMore(m)
    }
}

function buyMore(m){
    apple++ 
    getApple(m)  
}

getApple(money)