function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    let resultArray:number[] = [];
    potions = potions.sort((a,b) => a-b);

    for(let spellsValue of spells){
        let start:number = 0;
        let end:number = potions.length;
        while(start < end){
            let mid = Math.floor((start+end)/2);
            if((spellsValue * potions[mid]) >= success){
                end = mid ;
            }else{
                start = mid + 1;
            }
        }
        resultArray.push(potions.length - start);
    }
    return resultArray;
};


let spells = [5,1,3], potions = [1,2,3,4,5], success = 7;
console.log(successfulPairs(spells,potions,success))