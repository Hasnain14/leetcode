function moveZeroes(nums: number[]): void {
    let start:number = 0, swapTrue:number = 0, temp:number = 0;
    while(start < nums.length){
         if(nums[start] > 0 || nums[start] < 0){
            temp = nums[start];
            nums[start] = nums[swapTrue];
            nums[swapTrue] = temp;
            swapTrue++;
            start++
        }else{
            start++
        }
    }
    console.log(nums)
};

let nums = [73348,66106,-85359,53996,18849,-6590,-53381,-86613,-41065,83457,0]
console.log(moveZeroes(nums))

// [73348,66106,-85359,53996,18849,-6590,-53381,-86613,-41065,83457,0]


