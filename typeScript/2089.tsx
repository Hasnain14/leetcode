function targetIndices(nums: number[], target: number): number[] {
    let resultArray = [];
    nums = nums.sort(function(a, b) {
  return a - b;
});
    console.log(nums)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target){
            resultArray.push(i)
        }
    }
    return resultArray;
};

let nums=  [48,90,9,21,31,35,19,69,29,52,100,54,21,86,6,45,42,5,62,77,15,38], target = 6;
console.log(targetIndices(nums,target));