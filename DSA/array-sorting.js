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
          // For beginner 
            // b = a[i]
            // a[i] = a[j] 
            // a[j] = b

          // After some research
          [a[i], a[j]] = [a[j], a[i]]
        }
        // return
    }
    // return
}

console.log(a);

// Brute Force Method in which the loop is n*n
let temp
for (var j = 0; j < a.length; j++) {
for (let i = 0; i < a.length-1; i++) {
  if(a[i + 1] > a[i]){ // Change the sign to revese the sorting
    temp = a[i + 1]
    a[i + 1] = a[i]
    a[i] = temp
  }
}
}