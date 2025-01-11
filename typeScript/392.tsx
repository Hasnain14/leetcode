function isSubsequence(s: string, t: string): boolean {
    let count:number = 0;
    for(let i = 0 ; i < t.length; i++){
        if(t[i] === s[count]){
            count++;
        }
    }
    // console.log(count)
    return (count === s.length) ? true : false;
};
let s = "abc", t = "ahbgdc"
console.log(isSubsequence(s,t))


