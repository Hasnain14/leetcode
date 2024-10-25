function smallestEvenMultiple(n: number): number {
    if(n % 2 ===0 ){
        return n;
    }else{
        return n*2;
    }
};

let n = 6;

console.log(smallestEvenMultiple(n));