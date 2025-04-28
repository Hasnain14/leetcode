function countSubarrays(nums: number[], k: number): number {
    // let prefixArray : number[] = [];
    // prefixArray[0] = nums[0];
    // for(let i = 1; i < nums.length; i++){
    //     prefixArray.push(prefixArray[i - 1] + nums[i])
    // }

    let left : number = 0;
    let right : number = 0;
    let windowSum : number = nums[0];
    let totalSubarray : number = 0;

    while(right < nums.length){
        let windowLength : number = right - left + 1;
        let windowTest : number = windowLength * windowSum;

        if(windowTest < k){
            totalSubarray += windowLength;

            right++;
            windowSum += nums[right]
        }else{
            windowSum -= nums[left]
            left++;
        }
    }
    // console.log(prefixArray)
    return totalSubarray;
};

let nums = [2,1,4,3,5], k = 10;
console.log(countSubarrays(nums,k))