var numberOfPoints = function(nums) {
    
    const temp = [];
    let s = 0, e = 0;
   
    for (let i = 0; i < nums.length; i++) {
        s = (nums[i])[0];
        e = (nums[i])[1];
        for (let j = s; j <= e; j++) {
            temp.push(j);
        }  
    }

   let m =  temp.filter((a,i)=> temp.indexOf(a) == i);

    return (m.length);
};

const nums = [[1,3],[5,8]];
let res = numberOfPoints(nums);

console.log(res);