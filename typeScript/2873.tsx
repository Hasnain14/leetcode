function maximumTripletValue(nums: number[]): number {
  let maxTriplet = 0;       
  let bestLeft = nums[0];   
  let bestDiff = 0;         

  for (let j = 1; j < nums.length - 1; j++) {
    
    bestDiff = Math.max(bestDiff, bestLeft - nums[j]);
    
    maxTriplet = Math.max(maxTriplet, bestDiff * nums[j + 1]);
    
    bestLeft = Math.max(bestLeft, nums[j]);
  }
  
  return maxTriplet;
}

let nums = [12,6,1,2,7];
console.log(maximumTripletValue(nums))