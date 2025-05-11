function threeConsecutiveOdds(arr: number[]): boolean {
    let count : number = 0
    for(let i = 0; i < arr.length;i++){
        if((arr[i] % 2) === 0){
            count = 0;
        }else{
            count++
        }

        if(count === 3) return true
    }
    return false
};

let arr = [1,2,34,3,4,5,7,23,12];
console.log(threeConsecutiveOdds(arr))