strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    let val = ""
    for (let i = 0; i < strs.length; i++) {
        console.log(strs[i]);
        for (let j = 0; j < strs[i].length; j++) {
            if(strs[i][j] == strs[i+1][j]){
                val += strs[i][j]
                console.log(val,"a");
            }
        }
        return
    }
    console.log(val);
    return val
};

longestCommonPrefix(strs)
