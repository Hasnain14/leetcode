function minCapability(nums: number[], k: number): number {
    let left : number = 1;
    let right :number = Math.max(...nums);
    while(left < right){
        let mid = Math.floor((left + right)/2);
        let thiftHouse:number = 0;
        for(let i = 0; i < nums.length; i++){
            if(nums[i] <= mid){
                i++;
                thiftHouse++;
            }
        }

        if(thiftHouse >= k){
            right = mid;
        }else{
            left = mid + 1;
        }
    }
    return right;
};

let nums = [2,3,5,9], k = 2;
console.log(minCapability(nums,k))