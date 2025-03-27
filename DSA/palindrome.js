String.prototype.reverse = function () {
    let reversedStr = ''
    for (let index = this.length - 1; index >= 0; index--) {
        reversedStr += this[index]
    }
    return reversedStr
}

let str = '1000021'
let b = str.reverse()

// if(str == b){
//     console.log('Palindrome');
// }else{
//     console.log('Not Palindrome');
// }

//Another efficient method

let left = 0
let right = str.length - 1

let result = 'Palindrome'
while (left < right) {
    if(str[left] != str[right]){
        result = 'Not Palindrome'
        break
    }
    left ++
    right --
}


console.log(result);

// Just for numbers 
var isPalindrome = function(x) {
    
    let xCopy = x
    let output = 0
    while(xCopy > 0){
        output = (output  * 10) + (xCopy % 10)
        xCopy = Math.floor(xCopy / 10)
    }

    return output === x
};

console.log(isPalindrome(10001))