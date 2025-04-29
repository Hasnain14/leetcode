function countSubarrays(nums: number[], k: number): number {
    let left : number = 0;
    let right : number = 0;
    let countSubarrays : number = 0;

    let maxNumber : number = Math.max(...nums);

        let tempCount = 0;
    while(right < nums.length){
        if(nums[right] === maxNumber)tempCount++;

        // console.log(tempCount,left,right)

        if(tempCount === k){
            countSubarrays += nums.length - right;

            if(nums[left] === maxNumber)tempCount--;
            if(nums[right] === maxNumber)tempCount--;
            left++ 
        }else{

         right++
        }
    }
    // console.log(countSubarrays)
    return countSubarrays;
};

let nums = [1,3,2,3,3], k = 2;
console.log(countSubarrays(nums,k))