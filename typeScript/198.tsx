function rob(nums: number[]): number {
    let tempArray:number[] = [];
    tempArray[0] = 0;
    tempArray[1] = nums[0];
    let maxMoney:number = 0;
    for(let i = 2; i <= nums.length; i++){
        // console.log(tempArray,i)
        let lastElement:number = tempArray.pop()!
        maxMoney = Math.max(...tempArray);
        tempArray.push(lastElement)
        // console.log(maxMoney)
        tempArray[i] = nums[i - 1] + maxMoney;
    }
    // console.log(tempArray)
    return Math.max(...tempArray);
};

let nums = [2,1,1,2];
console.log(rob(nums))