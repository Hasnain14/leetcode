function intersect(nums1: number[], nums2: number[]): number[] {
    if(nums2.length < nums1.length){
        let temp = nums2;
         nums2 = nums1;
         nums1 = temp;
    }
    let outputArray:number[] = [];

    for(let i = 0; i < nums1.length; i++){
        if(nums2.includes(nums1[i])){
            outputArray.push(nums1[i])
            // nums2[nums2.indexOf(nums1[i])] = 0
            nums2.splice(nums2.indexOf(nums1[i]), 1)
            console.log(nums2)
        }
    }
    return outputArray;
};

let nums1 = [9,5,4], nums2 = [9,4,9,8,4];
console.log(intersect(nums1,nums2))