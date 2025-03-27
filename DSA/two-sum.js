// let arr = [1,2,3,4,5,7]
let arr = [2,7,11,15]

let target = 9

function a(nums,target) {
    let result = []
    let hashMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        let remaining = target - nums[i]
        let val = hashMap.get(remaining)
        if(val >= 0){
            result.push([val, i])
        }else{
            hashMap.set(nums[i],i)
        }
    }
    return result 
}

let b = a(arr,target)

console.log(b);