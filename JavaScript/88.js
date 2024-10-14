
var merge = function(nums1, m, nums2, n) {
    for (let i = 0; i < nums2.length; i++) {
        nums1[m++] = nums2[i];
        
    }
    console.log(nums1.sort((a,b)=> a-b))
};

const nums1 = [1,2,3,0,0,0]
 let m = 3 
 const nums2 = [2,5,6]
 let n = 3

 merge(nums1,m,nums2,n)