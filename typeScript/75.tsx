/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let redCount:number = 0;
    let whiteCount:number = 0;
    let blueCount:number = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            redCount++
        }else if(nums[i] === 1){
            whiteCount++
        }else{
            blueCount++
        }
    }
    let modifyCount : number = 0;
    while(redCount){
        nums[modifyCount] = 0;
        modifyCount++
        redCount--
    }
    while(whiteCount){
        nums[modifyCount] = 1;
        modifyCount++
        whiteCount--
    }
    while(blueCount){
        nums[modifyCount] = 2;
        modifyCount++
        blueCount--
    }

    // console.log(nums)
};

let nums = [2,0,2,1,1,0];
console.log(sortColors(nums))