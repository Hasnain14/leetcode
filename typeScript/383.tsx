function canConstruct(ransomNote: string, magazine: string): boolean {
    const myMap:Map<string,number> = new Map();
    for(let value of magazine){
        if(myMap.has(value)){
            myMap.set(value,myMap.get(value)! + 1)
        }else{
            myMap.set(value,1)
        }
    }

    for(let value of ransomNote){
        let check = myMap.get(value);

        if(check === undefined || check <= 0){
            return false
        }else{
            myMap.set(value,myMap.get(value)! - 1)
        }
    }

    return true;
};

let ransomNote = "a", magazine = "bccc";
console.log(canConstruct(ransomNote,magazine))