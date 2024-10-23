function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0, finalMaxWealth = 0;
        accounts.map(value =>{
            value.map(sumValue => {
                maxWealth += sumValue; 
            })
            finalMaxWealth = finalMaxWealth < maxWealth ? maxWealth : finalMaxWealth;
            maxWealth = 0;
            // if(finalMaxWealth < maxWealth){
            //     finalMaxWealth = maxWealth;
            //     maxWealth = 0;
            // }else{
            //     finalMaxWealth = finalMaxWealth;
            //     maxWealth = 0;
            // }
            // console.log(maxWealth)
        })
    return finalMaxWealth;
};

let accounts = [[1,2,3],[3,2,1]]

console.log(maximumWealth(accounts));

//  time and space O(N) 
// and O(max(nums)) where nums is the number of elements in each subarray of the accounts array