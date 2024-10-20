function getConcatenation(nums) {
    return nums.concat(nums);
}
;
var nums = [1, 2, 1];
var result1929 = getConcatenation(nums);
console.log(result1929);
// time complexity O(n) concat method has a time complexity of O(n)
// (space complexity O(n) concat method creates a new array with
// a length equal to the sum of the lengths of the two input arrays.)
