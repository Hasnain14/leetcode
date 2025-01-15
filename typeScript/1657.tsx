function closeStrings(word1: string, word2: string): boolean {
    const [str1,str2]:[Set<string>, Set<string>] = [new Set(word1), new Set(word2)];
    if(word1.length != word2.length){
        return false
    }else if(str1.size != str2.size){
        return false;
    }else{
        for(let item of str1){
            if(!str2.has(item)){
                return false;
            }
        }
    }

    const map1:Map<string,number> = new Map();
    const map2:Map<string,number> = new Map();

    for(let item of word1){
        map1.set(item,map1.has(item)? map1.get(item)! + 1 : 1)
    }
    for(let item of word2){
        map2.set(item,map2.has(item)? map2.get(item)! + 1 : 1)
    }

    const sortedMap1:Map<string,number> = new Map([...map1.entries()].sort((a, b) => b[1] - a[1]));
    const sortedMap2:Map<string,number> = new Map([...map2.entries()].sort((a, b) => b[1] - a[1]));
    // console.log(...sortedMap1)
    for(let i = 0; i < sortedMap1.size; i++){
        if(([...sortedMap1.entries()][i][1]) !== ([...sortedMap2.entries()][i][1])){
            return false;
        }
    }

    // console.log(sortedMap1,sortedMap2)
    return true;
};

let word1 = "abbzzca", word2 = "babzzcz";
console.log(closeStrings(word1,word2))