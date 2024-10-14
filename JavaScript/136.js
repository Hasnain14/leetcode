var singleNumber = function(nums) {
    let n = nums.length;
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    const temp = [];

    for(let i =0; i<n; i++){
        if(temp[nums[i]-1] == undefined){
            temp[nums[i]-1] = 1;
        }else{
            temp[nums[i]-1]++;
        }
    }

    // console.log(temp[353])
        
    for(let i = min-1; i<max; i++){
        if(temp[i] == 1)
             {
                return i+1;
            }
    }
        
};

const nums = [-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,-336,513,-560,-481,-174,101,-997,40,-527,-784,-283,354]
let r = singleNumber(nums);
console.log(r);