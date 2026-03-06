function f(num){
  if(num === 0) return 0;
  return num + f(num-1)
}

console.log(f(4));
