/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const newMapRow : Map<number, number> = new Map();
    const newMapCol : Map<number, number> = new Map();

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(matrix[i][j] === 0){
                newMapRow.set(i,1)
                newMapCol.set(j,1)
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(newMapRow.get(i) === 1){
                matrix[i][j] = 0;
                // console.log("test")
            }
            if(newMapCol.get(j) === 1){
                matrix[i][j] = 0
            }
        }
    }

    // console.log(newMapRow)
    // console.log(newMapCol)
    console.log(matrix)
};

let matrix = [[1,1,0],[1,0,1],[1,1,1]];
console.log(setZeroes(matrix))