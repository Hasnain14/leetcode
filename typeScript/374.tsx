/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
  */
  var guess = function(num:number) {
    if(num > pick){
        return -1;
    }else if(num < pick){
        return 1;
    }else{
        return 0;
    }
  }
 


function guessNumber(n: number): number {
    let start:number = 0, end:number = n;
    while(start <= end){
        let mid:number = Math.ceil((start + end) / 2);
        if(guess(mid) === -1 ){
            end = mid - 1;
        }else if(guess(mid) === 1){
            start = mid + 1;
        }else{
            return mid;
        }
    }
    return -1;
};

let n = 10, pick = 12;
console.log(guessNumber(n));