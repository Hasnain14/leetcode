var findDuplicates = function(nums) {
    nums.sort((a,b)=> a-b)
    let temp = nums[0];
    const result = [];

    for (let i = 1; i < nums.length; i++) {
        if (temp == nums[i]){
            result.push(temp);
            temp = nums[i];
        }else{
            temp = nums[i];
        }
        
    }

    return result;
};

const nums = [4,3,2,7,8,2,3,1];
const res = findDuplicates(nums);
console.log(res);