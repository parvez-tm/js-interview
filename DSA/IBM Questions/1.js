// Write a code to describe this as follows
// Rule:
// 1.Find the first vowel (a, e, i, 0, u).
// 2.Move all consonants before that vowel to the end of the word.
// 3.Add “ay” to the end.


let a = 'cheese';
let b = '';

a = a.toLocaleLowerCase(a);

for (var i = 0; i < a.length; i++) {
  if(a[i] == 'a' || a[i] == 'e' || a[i] == 'i' || a[i] == 'o'  || a[i] == 'u'){
    break;
  }
  b+=a[i];
}

a = a.substring(b.length)

console.log(a,b,'ay');
