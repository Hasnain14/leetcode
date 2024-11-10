function intersection(nums1: number[], nums2: number[]): number[] {
    let resultArray: number[] = [];
    if(nums1.length < nums2.length){
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    for(let i = 0; i< nums2.length; i++){
        if(nums1.includes(nums2[i]) && !resultArray.includes(nums2[i])){
            resultArray.push(nums2[i])
        }
    }
    return resultArray;
};

let nums1 = [1,2,2,1], nums2 = [2,1,2];
console.log(intersection(nums1,nums2))