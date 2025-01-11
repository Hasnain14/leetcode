function reverseVowels(s: string): string {
    let resultString:string[] = [];
    let tempVowl:string[] = [];
    let vowel:string[] = ["a","e","i","o","u","A","E","I","O","U"]
    for(let i = 0; i < s.length; i++){
        if(vowel.includes(s[i])){
            tempVowl.push(s[i])
        }
    }
    tempVowl = tempVowl.reverse();
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(vowel.includes(s[i])){
            resultString.push(tempVowl[count++])
        }else{
            resultString.push(s[i])
        }
    }
    // console.log(s)
    return resultString.join('');
};

let s = "IceCreAm";
console.log(reverseVowels(s))