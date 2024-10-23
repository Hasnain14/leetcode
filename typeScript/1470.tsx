function shuffle(nums: number[], n: number): number[] {
    let resultArray : number[] = [];
    let check = 0, left = 0;
    for(let i =0; i < nums.length; i++){
        if(check === 0){
            resultArray[i] = nums[left];
            left++;
            check = 1;
        }else{
            resultArray[i] = nums[n];
            n++;
            check = 0;
        }
    }
    return resultArray;

};

let nums1470 = [2,5,1,3,4,7], n = 3

console.log(shuffle(nums1470,n));

//  time and space O(N) and O(max(nums))