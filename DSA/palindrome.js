String.prototype.reverse = function () {
    let reversedStr = ''
    for (let index = this.length - 1; index >= 0; index--) {
        reversedStr += this[index]
    }
    return reversedStr
}

let str = 'mammam'
let b = str.reverse()

// if(str == b){
//     console.log('Palindrome');
// }else{
//     console.log('Not Palindrome');
// }

//Another efficient method

let left = 0
let right = str.length - 1

let result
while (left < right) {
    if(str[left] == str[right]){
        // console.log('Palindrome');
        result = 'Palindrome'
    }else{
        // console.log('Not Palindrome');
        result = 'Not Palindrome'
    }
    console.log(left,right);
    left ++
    right --
}

console.log(result);