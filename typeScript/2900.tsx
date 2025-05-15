function getLongestSubsequence(words: string[], groups: number[]): string[] {
    const sequenceArray : string[] = [words[0]];
    let flag : number = groups[0];
    

    for(let i = 1; i < groups.length; i++){
        if(flag !== groups[i]){
            sequenceArray.push(words[i]);
            flag = groups[i]
        }
    }

    return sequenceArray;
};

let words = ["a","b","c","d"], groups = [1,0,1,1];
console.log(getLongestSubsequence(words,groups))