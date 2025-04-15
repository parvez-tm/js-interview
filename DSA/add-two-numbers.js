var addTwoNumbers = function(l1, l2) {
    let a = parseInt(l1.reverse().join(""))
    let b = parseInt(l2.reverse().join(""))

    let c = (`${a+b}`).split("").reverse().map(data => parseInt(data))
    
    // console.log(c);
    return c
};

// let [l1,l2] = [[2,4,3], [5,6,4]]
let [l1,l2] = [[0], [0]]
// let [l1,l2] = [[9,9,9,9,9,9,9], [9,9,9,9]]

addTwoNumbers(l1,l2)