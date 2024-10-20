function minimumOperations(nums: number[]): number {
    let minOperation = 0;
    nums.map((value) => {
        if (value % 3 != 0) {
            minOperation++;
        }
    })
    return minOperation;
};

let nums3190 = [3, 6, 9];

console.log(minimumOperations(nums3190));

// time complexity o(N) space O(1)