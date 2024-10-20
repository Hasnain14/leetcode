function numIdenticalPairs(nums) {
    var numberOfGoodPair = 0;
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                numberOfGoodPair++;
            }
        }
    }
    return numberOfGoodPair;
}
;
var nums1512 = [1, 1, 1, 1];
console.log(numIdenticalPairs(nums1512));
