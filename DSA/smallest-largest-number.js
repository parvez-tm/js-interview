// Smallest Number

let a = [-2, -8, -1, 0.7]
let num = a[0]

if (a.length === 0) {
    console.log("Array is empty");
} else {
    // Using for loop 
    let num = a[0];
    for (var i = 1; i < a.length; i++) {
        if (num > a[i]) {
            num = a[i];
        }
    }

    // Usign Reduce 
    
    // let num = a.reduce((min, value) => (value < min ? value : min), a[0]);
    // console.log(num);

    console.log(num);
}