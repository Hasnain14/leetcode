function wordPattern(pattern: string, s: string): boolean {
    const myMaps = new Map();
    const sTemp:string[] = s.split(" ");
    
    if(pattern.length !== sTemp.length){
        return false;
    }
    for(let i = 0; i < pattern.length; i++){    
        if(myMaps.has(pattern[i])){
            if(myMaps.get(pattern[i]) !== sTemp[i]){
                return false;
            }else{
                continue;
            }
        }else{
            if(!Array.from(myMaps.values()).includes(sTemp[i])){
                myMaps.set(pattern[i],sTemp[i]);
            }else{
                return false;
            }
            
            
        }
    }
    return true;
};

let pattern = "abba", s = "dog dog dog dog"
console.log(wordPattern(pattern,s))