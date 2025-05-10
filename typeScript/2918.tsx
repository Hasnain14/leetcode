function minSum(nums1: number[], nums2: number[]): number {
    let firstZeroCount : number = 0;
    let secondZeroCount : number = 0;
    let firstTotalWithoutZero : number = 0;
    let secondTotalWithoutZero : number = 0;

    for(let i = 0; i < nums1.length; i++){
        if(nums1[i] === 0){
            firstZeroCount++;
        }else{
            firstTotalWithoutZero += nums1[i]
        }
    }
    for(let i = 0; i < nums2.length; i++){
        if(nums2[i] === 0){
            secondZeroCount++;
        }else{
            secondTotalWithoutZero += nums2[i]
        }
    }
    let firstTotal:number = firstTotalWithoutZero + firstZeroCount;
    let secondTotal:number = secondTotalWithoutZero + secondZeroCount;

    let target : number = (firstTotal > secondTotal) ? firstTotal : secondTotal

    if((firstZeroCount === 0 && target > firstTotal) || (
        secondZeroCount === 0 && target > secondTotal)){
            return -1
        }

    return target
};

let nums1 = [3,2,0,1,0], nums2 = [6,5,0]
console.log(minSum(nums1,nums2))