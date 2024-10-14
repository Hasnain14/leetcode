var exist = function(board, word) {

    let wordLength = word.length;
    let count = 0;

    for (let i = 0; i < board.length; i++) {
       for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == word[count]) {
                count++;
            }else{
                i++;
                j--;
            }
        
       }
        
    }
    console.log(board[0].length)
    
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCCED";

let res = exist(board, word);
console.log(res);