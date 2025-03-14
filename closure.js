function x (){
    let b = 10;
    return function y(){
        console.log(b);
    }
}

//console.log(x()) // This will return function
let z = x()
//z() // This will return 10


function outer() {
    let count = 0;
    return function inner() {
      return ++count;
    };
  }
  
  const counter = outer();
  
//   console.log(counter()); // ?
//   console.log(counter()); // ?
//   console.log(counter()); // ?
  


function createFunctions() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
      arr.push(function () {
        return i;
      });
    }
    return arr;
  }
  
  const funcs = createFunctions();
  
  console.log(funcs[0]()); // ?
  console.log(funcs[1]()); // ?
  console.log(funcs[2]()); // ?
  
