function minimumOperations(nums) {
    var minOperation = 0;
    nums.map(function (value) {
        if (value % 3 != 0) {
            minOperation++;
        }
    });
    return minOperation;
}
;
var nums3190 = [3, 6, 9];
console.log(minimumOperations(nums3190));
