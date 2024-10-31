function mySqrt(x: number): number {
    let lowerBound = 1, upperBound = x;
    let middle = Math.floor((upperBound+lowerBound)/2);
    if(x === 0 || x ===1){
        return x;
    }
    while(lowerBound <= upperBound){
        console.log(middle)
        if(((middle * middle) === x)){
            return middle;
        }else if((middle * middle) > x){
            upperBound = middle - 1;
            middle = Math.floor((upperBound+lowerBound)/2);
        }else if((middle * middle) < x){
            lowerBound = middle + 1;
            middle = Math.floor((upperBound+lowerBound)/2);
        }
    }
    return middle;
};

let x = 8;
console.log(mySqrt(x));

//time O(log N) space O(1)