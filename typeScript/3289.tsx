function getSneakyNumbers(nums: number[]): number[] {
    let result: number[] = [], temp: number[] = Array.from({ length: Math.max(...nums) + 1 }, (v, i) => 0);;
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        temp[nums[i]]++;
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] > 1) {
            result[index] = i;
            index++;
        }
    }
    //    console.log(temp);
    return result;
};

let nums3289 = [7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2];

console.log(getSneakyNumbers(nums3289));

//  time and space O(N) and O(max(nums))