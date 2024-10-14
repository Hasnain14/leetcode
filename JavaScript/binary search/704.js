
var search = function(nums, target) {
    let l = 0, r = nums.length - 1, mid = 0;

    while(l <= r){
        mid = Math.floor((l + r)/2);

        if (nums[mid] === target) {
            return mid;
        }else if (nums[mid] > target) {
            r = r - 1;
        }else{
            l = l + 1;
        }
    }

    return -1;
};

const nums = [-1,0,3,5,9,12];
let target = 10;

let res = search(nums, target);

console.log(res);