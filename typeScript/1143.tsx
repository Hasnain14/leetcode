function longestCommonSubsequence(text1: string, text2: string): number {
    // Initialize the 2D array with dimensions [text2.length + 1][text1.length + 1]
    let tempArray: number[][] = Array.from({ length: text2.length + 1 }, () =>
    Array(text1.length + 1).fill(0)
    );

    for(let i = 1; i <= text2.length; i++){
        for(let j = 1; j <= text1.length; j++){
            if(text2[i - 1] === text1[j - 1]){
                tempArray[i][j] = tempArray[i-1][j-1] + 1;
            }else{
                tempArray[i][j] = Math.max(tempArray[i-1][j],tempArray[i][j-1])
            }
        }
    }
    // console.log(tempArray)
    return tempArray[text2.length][text1.length];
};

let text1 = "abcde", text2 = "ace" ;
console.log(longestCommonSubsequence(text1,text2))