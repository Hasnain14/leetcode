function myAtoi(s: string): number {
   let upperlimit = Math.pow(2,31)- 1;
   let lowerLimit = Math.pow(-2,31);
   let result = parseInt(s);
   if(Number.isNaN(result)){
    result = 0;
   }
   if(result > upperlimit) result = upperlimit;
   else if(result < lowerLimit)  result = lowerLimit;
    return result;
};

let s = "-91283472332";
console.log(myAtoi(s));