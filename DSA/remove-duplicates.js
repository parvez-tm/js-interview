let arr = [1,2,3,5,5,3,1,4]

let a = new Set(arr)

//My solution is perfectly valid
let text = [];
for (const x of a) {
    //My logic
    // text.length = text.length + 1;
    // text[text.length-1] = x

    //GPT logic
    text[text.length] = x
}

// let text = [...new Set(arr)]; // GPT solution
console.log(text);


// Currently not is use but i am trying to remove same elements from array and it is still not fixed
function remove(x){
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] == x){
            for (let j = i; j < arr.length-1; j++) {
                arr[j] = arr[j+1]
            }
            arr.length = arr.length -1
            // console.log(arr,"asd");
            // return
        }
    }
    
    console.log(arr,"asd");
}

// remove(5)