function minCostClimbingStairs(cost: number[]): number {
    let tempArray:number[] = [];
    tempArray[cost.length] = 0;
    tempArray[cost.length - 1] = cost[cost.length - 1];

    for(let i = cost.length - 2; i >= 0; i--){
        tempArray[i] = cost[i] + Math.min(tempArray[i + 1],tempArray[i + 2]);
    }
    
    return tempArray[0] > tempArray[1] ? tempArray[1]:tempArray[0];
};

let cost =  [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));