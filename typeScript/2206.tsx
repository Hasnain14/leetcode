function divideArray(nums: number[]): boolean {
    nums = nums.sort((a,b) => a -b);
    
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] != nums[i+1]){
            return false
        }else{
            i++;
        }
    }

    return true;
};

let nums = [3,2,3,2,2,2];
console.log(divideArray(nums))