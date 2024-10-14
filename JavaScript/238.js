
var productExceptSelf = function(nums) {
    
    let length = nums.length;
    let temp = 1;
    let preArray=[] , finalArray = [];

    for (let i = 0; i < length; i++) {
       if (i < 1) {
        preArray[i] = temp
       }else{
        temp = temp * nums[i-1];
        preArray[i] = temp;
       }      
    }
    console.log(preArray);
    let tempF = 1;

    for (let i = length-1 ; i > -1; i--) {
        if(i > length-2){
            finalArray[i] = tempF * preArray[i];
        }else{
            tempF = tempF * nums[i+1];
            finalArray[i] = tempF * preArray[i];
        }
        
    }
    return finalArray;
};

let nums = [4,3,2,1,2];

let res = productExceptSelf(nums);
console.log(res);