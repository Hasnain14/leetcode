function applyOperations(nums: number[]): number[] {
    const resultArray:number[] = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1] && i < nums.length - 1){
            nums[i] = nums[i] * 2;
            nums[i+1] = 0;
        }
        if(nums[i] !== 0){
            resultArray.push(nums[i])
        }
    }
    for(let i = resultArray.length - 1; i < nums.length - 1; i++){
        resultArray.push(0);
    }
    return resultArray;
};

let nums = [0,1];
console.log(applyOperations(nums))

// [1,2,2,1,1,0]