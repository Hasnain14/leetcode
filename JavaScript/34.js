
var searchRange = function(nums, target) {
    const temp = [];
    temp[0] = nums.indexOf(target);
    temp[1] = nums.lastIndexOf(target);

    console.log(temp);
};

const nums = [5,7,7,8,8,10]
let  target = 8
searchRange(nums,target);