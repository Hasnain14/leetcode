function canJump(nums: number[]): boolean {
    if(nums[0] === 0 && nums.length > 1) return false;
    const tempArray : number[] = [nums[0]];
    for(let i = 1; i < nums.length - 1; i++){
        if(Math.max(...tempArray) >= nums.length - 1){
            return true;
        }else if(nums[i] === 0 && Math.max(...tempArray) <= i){
            return false;
        }else{
            tempArray.push(i + nums[i]) 
        }
    }
    // console.log(tempArray);
    return (Math.max(...tempArray) >= nums.length - 1) ?  true :  false;
};

let nums = [3,0,8,2,0,0,1]
console.log(canJump(nums))

// [1,0,1,0]
// [3,0,8,2,0,0,1]