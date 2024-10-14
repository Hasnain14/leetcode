var twoSum = function(nums, target) {
    const temp = new Map();

    for(let i =0; i<nums.length;i++){
        const check = target - nums[i];

        if(temp.has(check)){
            return [temp.get(check), i]
        }

        temp.set(nums[i], i)
    }
};

const nums = [2,7,11,15];
let target = 9;

let res = twoSum(nums, target);

console.log(res)