function findDifference(nums1: number[], nums2: number[]): number[][] {
    let resultArr:number[][] = [];
    let tempArray :number[]=[];

    // Find elements in nums1 that are not in nums2
    for(let i = 0; i< nums1.length; i++){
        if(!nums2.includes(nums1[i]) && !tempArray.includes(nums1[i])){
            // nums1.splice(i,1);
            tempArray.push(nums1[i])
        }
    }
    resultArr.push([...tempArray]);

    // Reset tempArray for the next calculation
    tempArray = [];

    // Find elements in nums2 that are not in nums1
    for(let i = 0; i< nums2.length; i++){
        if(!nums1.includes(nums2[i]) && !tempArray.includes(nums2[i])){
            // nums2.splice(i,1);
            tempArray.push(nums2[i])
        }
    }
    resultArr.push([...tempArray]);
    return resultArr;
};

let nums1 = [1,2,3,3], nums2 = [1,1,2,2];
console.log(findDifference(nums1,nums2))