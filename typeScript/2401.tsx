function longestNiceSubarray(nums: number[]): number {
    let longestSubarray:number = 0;
    let tempSubarray : number = 0;

    // console.log(nums[2] & nums[1])

    for(let left = 0,right = 0; right < nums.length; right++){
        // console.log(tempSubarray,(tempValue & nums[right]),tempValue,nums[right])
        while((tempSubarray & nums[right]) !== 0 ){
            tempSubarray = tempSubarray ^ nums[left];
            left++;
        }
        tempSubarray = tempSubarray | nums[right];
        longestSubarray = Math.max(longestSubarray, right - left + 1);
    }

    return longestSubarray;
};

let nums = [744437702,379056602,145555074,392756761,560864007,934981918,113312475,1090,16384,33,217313281,117883195,978927664];
console.log(longestNiceSubarray(nums))

// [744437702,379056602,145555074,392756761,560864007,934981918,113312475,1090,16384,33,217313281,117883195,978927664]