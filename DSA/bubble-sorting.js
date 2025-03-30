let a = [40,20,12,35]

// Swapping with one loop process 
let b
for (let i = 0; i < a.length; i++) {
    if(a[i] > a[i+1]){
        b = a[i]
        a[i] = a[i+1]
        a[i+1] = b
        console.log(a[i], a[i+1]);
    }
}
console.log(a);