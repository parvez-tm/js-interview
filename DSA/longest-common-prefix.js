strs = ["ab", "a"]

var longestCommonPrefix = function(strs) {
    let val = strs[0]
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < strs[i].length; j++) {
            console.log(val[j], strs[i][j]);
            // if(val[j] != strs[i][j]){
            //     val = removeLastChar(val)
            //     return
            // }
        }
    }
    return val
};

longestCommonPrefix(strs)


function removeChar(s1,s2){

}

function removeLastChar(str) {
    let result = '';
    for (let i = 0; i < str.length - 1; i++) {
      result += str[i];
    }
    return result;
}