function max(nums, k){
    if (nums.length < k) return null;
    let [max, win] = [0, 0]
    
    for (let i = 0; i < k; i++) {
      max+= nums[i]
    }
    
    win = max
  
    for (let i = 1; i <= (nums.length - k); i++) {
      win = (win - nums[i-1]) + nums[i + (k-1)]
      max = Math.max(max,win)
    }
    return max
  }
  
  max([10,1,133,4,1,211], 3)