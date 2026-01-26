// Imagine This Situation

// You have:
// 🏢 A tall building
// 🔮 2 crystal balls
// These balls are very fragile

// Rule of the balls:
// If you drop a ball from too high, it breaks
// If you drop it from low enough, it does NOT break
// There is one special floor in the building:
// Below that floor → the ball will not break
// From that floor and above → the ball will break

// 👉 You do NOT know which floor this is.

// Your Job (This is the whole question)
// You must find that exact floor:
// “What is the highest floor from which I can drop the ball without it breaking?”

// The Catch (Very Important)
// You have ONLY 2 balls
// If a ball breaks, you cannot use it again
// You want to use as few drops as possible, even in the worst case

function f(n) {

  // let i = 0;
    let a = n;

    // do {
       
       
       
    // } while (a > 0);
    // console.log(a)
    let j = 0
    for (var i = 0; a > 0 ; i++) {
      a = a - i;
      j = i
    }
      // console.log(j,"asd");
       let c = n
       for (let b = j; b >= 0; b--) {
         c = c-b
         console.log(c);
       }

    return -1;
}

console.log(f(100))