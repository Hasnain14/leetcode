function isAnagram(s: string, t: string): boolean {
    if(s.length != t.length){
        return false
    }
    for(let i = 0; i < s.length ; i++){
        let tempIndex = t.indexOf(s[i]);
        if(tempIndex >= 0){
           t = t.replace(s[i], "");
        }else{
            return false;
        }
    }
   
    return  true;
};

let  s = "anagram", t = "nagaram";
console.log(isAnagram(s,t))