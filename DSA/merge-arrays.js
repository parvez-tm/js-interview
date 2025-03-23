let a = [1,2,3]
let b = [1,22,3]
let c = [1,2,3]


function print(...args){
  let arr = []
  for (var i = 0; i < args.length; i++) {
    for (var j = 0; j < args[i].length; j++) {
      //arr.push(args[i][j]) //with push 
      arr[arr.length] = args[i][j] //without push
    }
  }
  console.log(arr)
  return arr
  
  // with usign inbuild methods as well
  //return [].concat(...args);
  // Or even shorter:
  //return [...a, ...b, ...c];
}

print(a,b,c)