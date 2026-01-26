function bs(arr, target) {

    let lo = 0;
    let hi = arr.length;

    do {
        let mid = Math.floor((hi + lo) / 2);
        if(arr[mid] == target){
            return mid;
        }else if(target > arr[mid]){
            lo = mid + 1
        }else{
            hi = mid - 1
        }
    } while (lo <= hi);

    return -1;
}

console.log(bs([1,2,3,54,67,88,99], 3))