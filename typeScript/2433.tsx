function findArray(pref: number[]): number[] {
    let resultArray:number[] = [];
    let tempValue = 0;
    resultArray.push(pref[0])
    for(let i = 0; i < pref.length - 1; i++){
        tempValue = pref[i] ^ pref[i + 1];
        resultArray.push(tempValue);
    }
    return resultArray;
};

let pref = [13];
console.log(findArray(pref))