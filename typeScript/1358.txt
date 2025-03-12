function numberOfSubstrings(s: string): number {
    const myMap = new Map([['a', 0], ['b', 0], ['c', 0]]);
    let count:number = 0;
    for(let i = 0,j = 0; i < s.length; i++){
        myMap.set(s[i],myMap.get(s[i])! + 1)
        while(Array.from(myMap.values()).every((c) => c > 0)){
            count += s.length - i;
            myMap.set(s[j],myMap.get(s[j])! - 1);
            j++;
        }
        
        console.log(myMap)
        // console.log(s[i])
    }
    return count;
};

let s = "aaacb";
console.log(numberOfSubstrings(s))