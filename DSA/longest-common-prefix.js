// strs = ["ab", "a"]
strs = ["cir","car"]
// Pattern: 🧩 Horizontal Scanning
// My approch 
var longestCommonPrefix = function(strs) {
    let val = strs[0]
    for (let i = 1; i < strs.length; i++) {
        val = removeChar(val,strs[i])
    }
    return val
};

// longestCommonPrefix(strs)


// find common char between two string
function removeChar(s1,s2){
    let result = ""
    for (let i = 0; i < s1.length; i++) {
        if(s1[i] == s2[i]){
            result += s1[i]
        }else{
            break
        }
    }
    return result
}

// Remove last char from string
function removeLastChar(str) {
    let result = '';
    for (let i = 0; i < str.length - 1; i++) {
      result += str[i];
    }
    return result;
}

// Pattern: 🧩 Sorting + Two-Pointer / Dual String Comparison
// GPT Approach: Fastest
var longestCommonPrefixGPT = function(strs) {
    if (!strs.length) return "";
    strs.sort(); // Lexicographic sort
    let first = strs[0];
    let last = strs[strs.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }
    return first.substring(0, i);
};
