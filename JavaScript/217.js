
const duplicateNumber = (nums) =>{
    

    nums.sort(function(a, b){return a - b});
    // console.log(nums);

    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i+1]){
            return true;
        }
        
    }
   return false;
   
  
}

const nums = [8,7,2,5,3,1,10,5];
let res = duplicateNumber(nums);

console.log(res)