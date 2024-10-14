
// <!-- find missing number -->
function missing_number(arr){

    let n = arr.length;
    const temp = [0];
    let ans = 0;

    for(let i =0; i<n; i++)
         temp[arr[i]] = 1;
    for(let i =0; i<=n; i++)
        if(temp[i]== undefined)
             {
                 ans = i;
            }
    console.log(ans)
}

const missingNumber = [1, 3, 7, 5, 6, 2, 8,4];
missing_number(missingNumber);