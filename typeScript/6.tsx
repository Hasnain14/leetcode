function convert(s: string, numRows: number): string {
    let convertedString = "";
    let stringCount = 0, i = 0, j = 0;
    const matrix = new Array((s.length)).fill("").map(() => new Array(s.length).fill(""));
    if(s.length === 1 || s.length === 0 || numRows === 1){
        return s;
    } 
    while(stringCount < s.length - 1){
        matrix[i][j] = s[stringCount];
        if(j >= numRows - 1){
            while(j > 0){
                i++;
                j--;
        // console.log(i , j)
                stringCount++;
                matrix[i][j] = s[stringCount];
            }
        }else{
            j++;
        // console.log(i , j)
            stringCount++;
            matrix[i][j] = s[stringCount];
        }
    }
    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0;  j < matrix.length; j++){
            if(matrix[j][i] != "" && matrix[j][i] != undefined){
                convertedString += matrix[j][i]; 
            }
        }
    }
    return convertedString;
};

let s = "PAYPALISHIRING", numRows = 3;
console.log(convert(s,numRows));