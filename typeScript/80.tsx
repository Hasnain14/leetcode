function removeDuplicates(nums: number[]): number {
    let check = 0,tempChek = nums[0];
    for(let i = 0; i < nums.length; i++){
        if(tempChek === nums[i] ){
            check++;
        }else{
            tempChek = nums[i];
            if(check > 2){

                nums.splice(i - check + 2,check - 2)
                i = i - check + 1;
            }else{
                i--;
            }
            check = 0;
        }
        
    }
    if(check > 2){
             nums.splice(nums.length - check + 2,check - 2)
        }
        console.log(nums)
    return nums.length;
};

let nums = [0,0,1,1,1];
console.log(removeDuplicates(nums));

// [1,1,1]
// [0,0,1,1,1,1,2,3,3]