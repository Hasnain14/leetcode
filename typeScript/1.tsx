// leet code 
function twoSum(nums: number[], target: number): number[] {
    const temp = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        let checkValue = target - nums[i];

        if (temp.has(checkValue)) {
            return [temp.get(checkValue)!, i];
        }

        temp.set(nums[i], i);
    }
};

const nums1 = [3, 2, 4];
let target = 6;

console.log(twoSum(nums1, target));