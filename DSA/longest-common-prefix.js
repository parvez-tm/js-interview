strs = ["ab", "a"]

var longestCommonPrefix = function(strs) {
    let val = strs[0]
    for (let i = 1; i < strs.length-1; i++) {
        // for (let j = 0; j < strs[i].length; j++) {
            // if(val[j] != strs[i][j]){
            //     val = removeLastChar(val)
            //     return
            // }
        // }
    }
    return val
};

longestCommonPrefix(strs)


function removeChar(s1,s2){
    let result = ""
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] == s2[i]){
            result += s1[i]
        }
    }
    // console.log(result);
    return result
}

function removeLastChar(str) {
    let result = '';
    for (let i = 0; i < str.length - 1; i++) {
      result += str[i];
    }
    return result;
}