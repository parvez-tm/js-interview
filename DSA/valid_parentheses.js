// My logic
var isValid = function (s) {
    if (s.length % 2 != 0) return false

    const m = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);

    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(' || s[i] == "[" || s[i] == "{") {
            stack.push(s[i])
        }
        else if (m.get(s[i]) == stack[stack.length - 1]) {
            stack.pop()
        }
        else {
            return false
        }
    }
    // console.log(stack)
    if (stack.length == 0) return true

    return false
};

// GPT Optimizations 
function isValid(s) {
    if (s.length % 2 !== 0) return false;
  
    const map = new Map([
      [')', '('],
      [']', '['],
      ['}', '{']
    ]);
  
    const stack = [];
    const opens = new Set(['(', '[', '{']);
  
    for (const char of s) {
      if (opens.has(char)) {
        stack.push(char);
      } else if (stack.length && map.get(char) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  
    return stack.length === 0;
  }
  