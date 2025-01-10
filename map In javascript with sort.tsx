function increasingTriplet(nums: number[]): boolean {
    let map1:Map<number, number> = new Map([
    ]);

    for(let i = 0; i < nums.length; i++){
        map1.set(i,nums[i])
    }

    // sort map according to value
    const sortedMap = new Map([...map1.entries()].sort((a, b) => b[0] - a[0]));
    // console.log(sortedMap);

    // value and key access
    for(let i = 1; i < nums.length - 1; i++){
        let value = (([...sortedMap.entries()])[i])[0]
        let key = (([...sortedMap.entries()])[i])[1]
        console.log("key = " + key + " value = " + value)
    }
    return false;
};

let nums = [2,1,5,0,4,6]
console.log(increasingTriplet(nums))