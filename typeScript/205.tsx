function isIsomorphic(s: string, t: string): boolean {
    const newMap: Map<string,string> = new Map();
    if(s.length !== t.length){
        return false
    }
    for(let i = 0; i < s.length; i++){
        if(newMap.has(s[i])){
            if(newMap.get(s[i]) !== t[i]){
                return false
            }
        }else{
            if(Array.from(newMap.values()).includes(t[i])){
                return false
            }
            newMap.set(s[i],t[i]);
        }
    }

    return true;
};

let s = "badc", t = "baba"
console.log(isIsomorphic(s,t))