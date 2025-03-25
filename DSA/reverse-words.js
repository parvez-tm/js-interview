let a = 'hello world parvez';

function rev(str) {
    let result = ''
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++) {
        result += arr[i].reverse() + " "
    }
    console.log(result);
    return result
}

String.prototype.reverse = function () {
    let reversedStr = ''
    for (let index = this.length - 1; index >= 0; index--) {
        reversedStr += this[index]
    }
    return reversedStr
}


// 'parvez'.reverse()


rev(a)

// ----------------------------------------------------------------------------------------------------


// Another Method without using anything inbuilt

function rev2(str) {
    let b = '';
    let word = '';
    
    // Iterate through each character in the string
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            // Reverse the current word and add it to result
            b += reverseWord(word) + ' ';
            word = '';  // Reset word to start with the next one
        } else {
            word += str[i]; // Build the word
        }
    }

    // Add the last word if any
    b += reverseWord(word);
    console.log(b);
    return b;
}

function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];  // Reverse the word manually
    }
    return reversed;
}

rev2(a); // Output: 'olleh dlrow zevrap'
