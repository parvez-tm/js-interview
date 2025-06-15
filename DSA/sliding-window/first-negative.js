// Brute Force 
function first(nums, k){
    let a = 1
    for (let i = 0; i <= nums.length - k; i++) {
        for (let j = i; j < (i+k); j++) {
            if(nums[j] < 0 ){
                console.log(nums[j],i);
                a = 0
                break
            }
            a = 1
        }
        if(a){
            console.log(0)
        }
    }
}

function negative(nums, k){
    let queue = []
    for (var i = 0; i < nums.length; i++) {
        if(nums[i]<0){
            queue.push(i)
        }
        if(i >= k-1){
            while (queue.length && queue[0] < i - k + 1) {
                queue.shift()
            }

             // Print the first negative in the current window
             if (queue.length > 0) {
                console.log(nums[queue[0]]);
            } else {
                console.log(0);
            }
        }

    }
  }

negative([12,-1,-7,8,-15,30,6,2], 3)