// My approch efficient enough 
let m = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
]);

var romanToInt = function (s) {
    let c = 0
    for (let i = 0; i < s.length; i++) {
        let a = m.get(s[i])
        let b = m.get(s[i + 1])
        // console.log(a,b);
        if(b > a){
            c += (b-a)
            i++
        }else{
            c +=a
        }
    }
    // console.log(c)
    return c
};

romanToInt('MCMXCIV')


// Different Approch: GPT 
const romanToInt2 = function(s) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanValues[s[i]];

        // If the current value is less than the previous value, subtract it; otherwise, add it
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue; // Update the previous value for the next iteration
    }

    return result;
};
