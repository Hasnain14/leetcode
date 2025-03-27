function minimumIndex(nums: number[]): number {
    const myMap: Map<number, number> = new Map();
    for (let val of nums) {
        if (myMap.has(val)) {
            myMap.set(val, myMap.get(val)! + 1)
        } else {
            myMap.set(val, 1);
        }
    }

    const sortedMap = [...myMap].sort((a, b) => b[1] - a[1])
    const [dominantValue, dominantfrequency] = [...sortedMap][0]
    let checkDominate: number = 0;
    let index: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === dominantValue) checkDominate++;
        if (checkDominate * 2 > (i + 1) && (dominantfrequency - checkDominate) * 2 > (nums.length - 1 - i)) return i;
    }


    return - 1;

};

// let nums = [1,2,2,2];
// let nums = [2,1,3,1,1,1,7,1,2,1];
let nums = [3, 3, 3, 3, 7, 2, 2];
console.log(minimumIndex(nums))