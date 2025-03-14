function maximumCandies(candies: number[], k: number): number {
    let result:number = 0;
    for(let left = 1, right = Math.max(...candies); left <= right; ){
        let count:number = 0;
        let mid:number = Math.floor((left+right)/2);
        candies.map((value) => count += Math.floor(value / mid));
        if(count >= k){
            result = mid;
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return result;
};

let candies = [2,5], k = 11;
console.log(maximumCandies(candies,k))