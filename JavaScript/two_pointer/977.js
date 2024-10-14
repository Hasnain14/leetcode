
var sortedSquares = function(nums) {
    let sorted = nums.map((val) => Math.pow(val, 2));

    sorted.sort((a,b) => a-b)

    return sorted;
};

const nums = [-4,-1,0,3,10];

let res = sortedSquares(nums);

console.log(res);