let str = 'parvez'


//reverse loop
for (let index = str.length-1; index >= 0; index--) {
    console.log(index);
}

// reverse string
let b = ''

for (let index = str.length-1; index >= 0; index--) {
    b += str[index]
}
console.log(b);
