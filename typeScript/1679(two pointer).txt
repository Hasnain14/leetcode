function maxOperations(nums: number[], k: number): number {
    let count:number = 0, 
    start:number = 0,
    end:number = nums.length - 1;
    let sortedNums: number[] = nums.sort((a,b) => a -b);
    console.log(sortedNums);
    while(start<end){
        if(nums[start] + nums[end] === k){
            count++;
            start++;
            end--;
        }else if(nums[start] + nums[end] < k){
            start++;
        }else if(nums[start] + nums[end] > k){
            end--;
        }
    }
    return count;
};
let nums = [1,2,3,4], k = 5;

console.log(maxOperations(nums,k))