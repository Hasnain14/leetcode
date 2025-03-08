function minimumRecolors(blocks: string, k: number): number {
    let tempString = [...blocks];
    let outputCount:number = Infinity, tempCount:number = 0;
    for(let i = 0; i <= blocks.length - k; i++){
        for(let j = i; j < i + k; j++){
                // console.log(tempString[j])
            if(tempString[j] === "W"){
                tempCount++;
            }
        }
        console.log(tempCount)
        if(tempCount < outputCount){
            outputCount = tempCount;
        }
        tempCount = 0;
        console.log(outputCount)
    }

    return outputCount;
};

let blocks = "BWWWBB", k = 6
console.log(minimumRecolors(blocks,k))