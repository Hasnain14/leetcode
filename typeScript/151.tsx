function reverseWords(s: string): string {
    let reverseString : string = "";
    let tempString: string = "";
    s = s.trim();
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === " "  && tempString !== "" ){
            console.log(tempString)
            tempString = tempString.split('').reverse().join('')
            reverseString = reverseString + tempString + " ";
            tempString = "";
        }else{
            if(s[i] ==" "){
                continue
            }else{
                tempString = tempString + s[i];
            }
        }
    }
        tempString = tempString.split('').reverse().join('')
        reverseString = reverseString + tempString;
    return reverseString;
};

let s = "a good   example"

console.log(reverseWords(s))