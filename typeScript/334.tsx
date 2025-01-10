function increasingTriplet(nums: number[]): boolean {
    let a = Infinity, b = Infinity;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] <= a){
            a = nums[i]
        }else if(nums[i] <= b){
            b = nums[i]
        }else{
            return true
        }
    }

    return false;
};

let nums = [5,1,6]
console.log(increasingTriplet(nums))



// test case
// [1,5,0,4,1,3]
// [20,100,10,12,5,13]
// [1]
// [0,4,2,1,0,-1,-3]
// [5,1,6]