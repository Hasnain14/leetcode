function countSubarrays(nums: number[]): number {
    let resultCount : number = 0;

    for(let i = 0; i < nums.length - 2; i++){
        let tempTest : number = (nums[i] + nums[i + 2])*2;
        if(tempTest === nums[i + 1]){
            resultCount++
        }
        
    }
    return resultCount;
};

let nums = [1,4,1,4,1];
console.log(countSubarrays(nums))