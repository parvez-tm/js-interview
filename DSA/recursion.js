// Loop without for
let data = 0

function loop(x){
    console.log(x,"asd");
    if(x < 10){
        loop(x + 1)
    }
}
loop(data)