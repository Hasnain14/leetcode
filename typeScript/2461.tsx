function checkForDuplicates(array: number[]): [boolean , number] {
  let valuesAlreadySeen = [];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let value = array[i]
    sum += array[i];
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return [true, 0]
    }
    valuesAlreadySeen.push(value)
  }
  return [false, sum];
  
}

function maximumSubarraySum(nums: number[], k: number): number {
    let tempSum = 0;
    let tempArray = [];
    if(nums.length < k){
        return 0
    }else if(nums.length === k){
       const [check, sum] = checkForDuplicates(nums);
       return sum;
    }else{
        for(let i = 0; i < nums.length - (k -1); i++){
            for(let j = i; j < k + i; j++){
                tempArray.push(nums[j])
            }
            // console.log(tempArray)
            // const [check, sum] = checkForDuplicates([nums[i], nums[i + 1], nums[i + 2]]);
            const [check, sum] = checkForDuplicates(tempArray);
            tempArray = [];
           tempSum = (tempSum > sum)? tempSum:sum ;
        }
        return tempSum;
    }
};

let nums = [1,6,7,6], k = 2;
console.log(maximumSubarraySum(nums,k))