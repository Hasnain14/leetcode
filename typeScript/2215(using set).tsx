function findDifference(nums1: number[], nums2: number[]): number[][] {
    const [ansSet1,ansSet2]:[Set<number>, Set<number>] = [new Set(nums1), new Set(nums2)];
//    console.log(...ansSet1)
//     console.log(nums1);

    let temp1:number[]= [...ansSet1].filter(n => !ansSet2.has(n));
    let temp2:number[] = [...ansSet2].filter(n => !ansSet1.has(n));
  
    return[temp1,temp2]
}

let nums1 = [1,2,3], nums2 = [2,4,6];
console.log(findDifference(nums1,nums2))
