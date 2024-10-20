function buildArray(nums) {
    var temp = [];
    for (var i = 0; i < nums.length; i++) {
        temp[i] = nums[nums[i]];
    }
    return temp;
}
;
var nums1920 = [0, 2, 1, 5, 3, 4];
var result1920 = buildArray(nums1920);
console.log(result1920);
