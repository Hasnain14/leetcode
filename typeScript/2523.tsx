const isPrimeCheck = (num:number):boolean => {
    if (num < 2) return false;
    if (num === 2 || num === 3) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}
function closestPrimes(left: number, right: number): number[] {
    let first:number = -1, second:number = -1;
    let privousPrime = -1;
     let small = Infinity;
    while(left <= right){
        if(isPrimeCheck(left)){
            if(privousPrime !== -1 && left - privousPrime < small){
                first = privousPrime;
                second = left;
                small = left - privousPrime;
            }
            privousPrime = left;
            left++;
        }else{
            left++
        }       
    }

    return (first != -1 && second != -1) ?  [first,second] :  [-1, -1]
};

let left = 19, right = 31;
console.log(closestPrimes(left,right))