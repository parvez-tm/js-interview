let a = [23,23,34,4,2,2,43,23,3]

// My Logic
    for (let i = 0; i < a.length; i++) {
      for (let j = i; j < a.length; j++) {
        if(a[i] > a[j]){
          let b = a[i]
          a[i] = a[j]
          a[j] = b
        }
      }
    }
    
    let b = a[a.length -1]
    for (let i = a.length -1; i > 0; i--) {
      // console.log(a[i],a[i] > b)
      if(a[i]<b){
      console.log(a[i],"ad")
      break
      }
    }

// GPT Solution without sort 
function secondLargest(arr) {
    let first = -Infinity, second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? null : second;
}
console.log(secondLargest(a))
// console.log(a,"Hello, World!");


// Infinity Introduction for the first time for me
console.log(1 / 0);          // → Infinity
console.log(-1 / 0);         // → -Infinity
console.log(Infinity > 9999999999); // → true
console.log(Infinity + 1);   // → Infinity
console.log(Infinity - Infinity); // → NaN
