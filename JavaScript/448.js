

var findDisappearedNumbers = function(nums) {
    let n = nums.length;
    const temp = [];
    const ans = [];

    for(let i =0; i<n; i++)
         temp[nums[i]-1] = 1;
    for(let i =0; i<n; i++)
        if(temp[i]== undefined)
             {
                let m = i+1;
                ans.push(m);
            }
    
            return ans;
};

const nums = [2,2];
let r = findDisappearedNumbers(nums)

console.log(r);

