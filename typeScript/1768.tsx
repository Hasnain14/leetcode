function mergeAlternately(word1: string, word2: string): string {
    let w1Length = word1.length, w2Length = word2.length;
   let smallString = (w1Length < w2Length) ? w1Length : w2Length;
   let resultString = "";
   for(let i = 0 ; i < smallString; i++){
        resultString = resultString + word1[i] + word2[i]
   }
   if(w1Length > smallString){
        for(let i = smallString ; i < w1Length; i++){
            resultString = resultString + word1[i];
        }
   }else if(w2Length > smallString){
        for(let i = smallString ; i <w2Length; i++){
            resultString = resultString + word2[i];
        }
   }
    return resultString;
};

let word1 = "abc", word2 = "pqrtu";

let outputResult = mergeAlternately(word1,word2);
console.log(outputResult);