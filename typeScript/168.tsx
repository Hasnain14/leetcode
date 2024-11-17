function convertToTitle(columnNumber: number): string {
    let tempText = 0;
    let outText = '';
    while(columnNumber){
         if(columnNumber > 26){
            tempText = columnNumber % 26 || 26;
            columnNumber =  (columnNumber - tempText)/26
            outText = String.fromCharCode(tempText + 64) + outText;
        }else{
            outText = String.fromCharCode(columnNumber + 64) + outText;
            columnNumber -= columnNumber;
        }
    }
    return (outText)
};

let columnNumber = 52;
console.log(convertToTitle(columnNumber))
// let at = "a";
// console.log(at.charCodeAt(0))
// console.log(String.fromCharCode(65 + 1,66,67))