function largestAltitude(gain: number[]): number {
    let prefixArray : number[] = [];
    prefixArray.push(0);
    prefixArray.push(gain[0]);
    for(let i = 1; i < gain.length;i++){
        prefixArray.push(gain[i]+prefixArray[i]);
    }
    return Math.max(...prefixArray)
};

let gain = [-5,1,5,0,-7]
console.log(largestAltitude(gain))