
var majorityElement = function(nums) {
    let conut = 1;

    nums.sort((a,b) => a-b);

    if(nums.length <2 ){
        return nums[0];
    }

    for (let i = 0; i < nums.length-1; i++) {
       if(nums[i] != nums[i+1]){
            conut = 1;
       }else{
            conut++;
       }

       if(conut >= (Math.floor(nums.length)/2)){
        return nums[i];
       }
    }
    // return nums;
};

const nums = [2];

let res = majorityElement(nums);
console.log(res);