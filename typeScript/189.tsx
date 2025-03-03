/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {

    for(let i = 0; i < k; i++){

        let temp = nums.pop();
        nums.unshift(temp!);
    }
    // console.log(temp);
    console.log(nums);
    
}; 

let nums = [1,2,3,4,5,6,7], k = 3;
console.log(rotate(nums,k))