function minOperations(nums: number[]): number {
    let resultCount:number = 0;
    for(let i = 0; i < nums.length - 2;i++){
        if(nums[i] === 0){
            resultCount++;

            nums[i] ^= 1;
            nums[i+1] ^= 1;
            nums[i+2] ^= 1;
        }
    }
    return ((nums[nums.length - 1] + nums[nums.length - 2]) === 2) ? resultCount : -1;
};

let  nums = [0,1,1,1,0,1];
console.log(minOperations(nums))