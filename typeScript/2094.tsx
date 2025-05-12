function findEvenNumbers(digits: number[]): number[] {
    const newMap:Map<number,number> = new Map();
    let resultArray : number[] = [];

    for(let i = 0; i < digits.length;i++){
        if(newMap.has(digits[i])){
            newMap.set(digits[i], newMap.get(digits[i])! + 1)
        }else{
            newMap.set(digits[i], 1)
        }
    }

    for(let i = 100; i < 1000; i+=2){
        const singleDigit = [Math.floor(i / 100), Math.floor((i % 100) / 10), i % 10];
        singleDigit.forEach((digit) => newMap.set(digit, newMap.get(digit)! - 1));
        if (newMap.get(singleDigit[0])! > -1 
            && newMap.get(singleDigit[1])! > -1 
            && newMap.get(singleDigit[2])! > -1) 
                resultArray.push(i);
        singleDigit.forEach((digit) => newMap.set(digit, newMap.get(digit)! + 1));
        // console.log(singleDigit)
        // console.log(singleDigit)
    }

    // console.log(resultArray)
    // console.log(newMap)

    return resultArray;
};

let digits = [2,1,3,0]

console.log(findEvenNumbers(digits))