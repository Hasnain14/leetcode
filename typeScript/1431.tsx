function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let resultArray:boolean[] = [];
    let maxCandie = Math.max(...candies)
    for(let i = 0; i < candies.length; i++){
        if(candies[i] + extraCandies >= maxCandie){
            resultArray.push(true)
        }else{
            resultArray.push(false)
        }
    }
    // console.log(maxCandie)
    return resultArray;
};

let candies = [2,3,5,1,3], extraCandies = 3;

console.log(kidsWithCandies(candies,extraCandies))