function numIdenticalPairs(nums: number[]): number {
    let numberOfGoodPair = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                numberOfGoodPair++;
            }

        }

    }
    return numberOfGoodPair;
};

let nums1512 = [1, 1, 1, 1];

console.log(numIdenticalPairs(nums1512));

// time and space O(N^2) and O(1)