function countCompleteSubarrays(nums: number[]): number {
    const n = nums.length;
    const totalUnique = new Set(nums).size;
    const count: Map<number, number> = new Map();
    let res = 0, l = 0;

    for (let r = 0; r < n; r++) {
        count.set(nums[r], (count.get(nums[r]) || 0) + 1);
        while (count.size === totalUnique) {
            res += n - r;
            count.set(nums[l], count.get(nums[l])! - 1);
            if (count.get(nums[l]) === 0) count.delete(nums[l]);
            l++;
        }
    }
    return res;
}

let nums = [1,3,1,2,2];
console.log(countCompleteSubarrays(nums))