
function f(str) {
    //Using two pointer approach in for loop
    //   for (let i = 0, j = str.length-1; i < j; i++, j--) {
    //     console.log(str[i],str[j]);
    //     [str[i],str[j]] = [str[j],str[i]]
    //   }
    //   return str;


    //Using two pointer approach in recursion
    if (lo > hi) return str;
    [str[lo], str[hi]] = [str[hi], str[lo]];
    f(str, lo + 1, hi - 1)
    return str;
}
let a = "Hello, World!"
let b = a.split("")
// console.log(f(b)); //for loop approach

console.log(f(b, 0, b.length - 1)); //recursive approach
