function buildArray(nums: number[]): number[] {
    let temp = [];
    for (let i = 0; i < nums.length; i++) {
        temp[i] = nums[nums[i]];

    }
    return temp;
};

let nums1920 = [0, 2, 1, 5, 3, 4];

const result1920 = buildArray(nums1920)

console.log(result1920);

//  time and space complexity O(n)