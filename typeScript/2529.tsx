function maximumCount(nums: number[]): number {
    let posCount: number = 0, negCount:number = 0;
    for(let l = 0,r = nums.length - 1; l <= r; ){
        if(nums[l] < 0){
            negCount++
            l++;
        }else if(nums[l] === 0){
            l++
        }

        if(nums[r] > 0){
            posCount++;
            r--;
        }else if(nums[r] === 0){
            r--
        }
        
    }

    return (posCount > negCount) ? posCount : negCount;
};

let nums = [-2,-1,-1,0,0,1,9,8,2];
console.log(maximumCount(nums))