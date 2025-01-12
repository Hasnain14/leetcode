function maxVowels(s: string, k: number): number  {
     let maxNumber:number = -Infinity, count:number = 0;
    let vowelSet:string[] = ["a","e","i","o","u","A","E","I","O","U"] 
    for(let j = 0; j <  k; j++){
            if(vowelSet.includes(s[j])){
                count++
            }
        }
        maxNumber = count;
    for(let i = 0; i < s.length - k; i++){
        
            // console.log(nums[i+k-1])
            // console.log(count)
            if(vowelSet.includes(s[i]) ){
                count--;
            }
            if(vowelSet.includes(s[i+k])){
                count++
            }
        maxNumber = Math.max(count,maxNumber);
        
    }
    return maxNumber;
};

let s = "a", k = 1;
console.log(maxVowels(s,k))

//s = "abciiidef", k = 3