function pivotIndex(nums: number[]): number {
    let leftSum:number = 0, rightSum:number = 0;
// create prefix array
    let prefixArray : number[] = [];
    prefixArray.push(nums[0]);
    for(let i = 1; i < nums.length;i++){
        prefixArray.push(nums[i]+prefixArray[i-1]);
    }
// for 0 position
    rightSum = prefixArray[nums.length - 1] - leftSum - nums[0];
    if(leftSum === rightSum){
        return 0;
    }
// find position
    for(let i = 1; i < nums.length; i++){
        leftSum = prefixArray[i-1];
        rightSum = prefixArray[nums.length - 1] - leftSum - nums[i];

        if(leftSum === rightSum){
            return i;
        }

    }
    // console.log(prefixArray)
    return -1;
};

let nums = [-1,1,0];
console.log(pivotIndex(nums))

// [1,7,3,6,5,6] 3
// [1,2,3] -1
// [2,1,-1] 0
// [-1,-1,-1,-1,-1,0] 2