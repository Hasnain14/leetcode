function hIndex(citations: number[]): number {
     let result:number = 0
    if(citations.length === 1 && citations[0] !== 0){
         return 1;
    }else if(citations.length === 1 && citations[0] === 0){
        return 0;
    }
    citations = citations.sort((a,b) => a - b);
    for(let i = 0; i < citations.length; i++){
        // console.log(i)
        if(citations.length  - i <= citations[i]){
            result = citations.length  - i;
            break;
        }
    }
    // console.log(result);
    return result;
};

let citations = [3,0,6,1,5];
console.log(hIndex(citations))


// [9, 7, 6, 2,1]
// [1,1,3]
// [3,0,6,1,5]