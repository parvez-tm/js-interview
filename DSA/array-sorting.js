let a = [11,40,3,20,50,35]

// Swapping with one loop process 
let b
// for (let i = 0; i < a.length-1; i++) {
//     console.log(a[i], a[i+1]);
//     if(a[i] > a[i+1]){
//         b = a[i]
//         a[i] = a[i+1]
//         a[i+1] = b
//     }
// }

// My Logic Loop
let f = 0
for (let i = 0; i < a.length; i++) {
    for (let j = i; j < a.length; j++) {
        console.log(f++);
        if(a[i] > a[j] && a[i] != a[j]){ // Change the sign to revese the sorting
            b = a[i]
            a[i] = a[j] 
            a[j] = b
        }
        // return
    }
    // return
}

console.log(a);