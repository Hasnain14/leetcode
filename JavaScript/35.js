var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};

let nums = [1, 5, 8, 9];
let target = 8;

let res = searchInsert(nums, target);
console.log(res);
