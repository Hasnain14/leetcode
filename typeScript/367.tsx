function isPerfectSquare(num: number): boolean {
    let end = num, start = 0;
    while(start <= end){
        let mid = Math.floor((start + end)/2);
        // console.log(start , end, mid )

        // end = Math.floor(end /2)

        if(mid * mid === num){
            return true;
        }else if(mid * mid > num){
            end = mid - 1
        }else if(mid * mid < num){
            start = mid + 1  
        }
    }
    // console.log(start , end )
    return false;
};

let num = 9;
console.log(isPerfectSquare(num))