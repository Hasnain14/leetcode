function isZeroArray(nums: number[], queries: [number, number][]) {
   let compareArray : number[] = [];
    let countArray : number[] = new Array(nums.length + 1).fill(0)

    for(let i = 0; i < queries.length; i++){
        countArray[queries[i][0]]++;
        countArray[queries[i][1] + 1]--;
    }
    // console.log(countArray)
    
    for(let i = 0, current = 0; i < countArray.length; i++){
        compareArray.push(current += countArray[i]);
        // console.log(compareArray[i])
        if(compareArray[i] < nums[i]) return false
    }

    // return nums.every((num, i) => compareArray[i] >= num);

    return true  
}