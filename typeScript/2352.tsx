
function equalPairs(grid: number[][]): number {
    let countResult:number = 0;
    let tempArrayRow:string[] = [];
    let tempArrayCol:string[] = [];
    let tempValueCol:number[] = [];
    let tempValueRow:number[] = [];
    
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid.length; j++){
            tempValueCol.push((grid[i][j]));
            tempValueRow.push((grid[j][i]));
        }
        tempArrayCol.push(tempValueCol.toString());
        tempArrayRow.push(tempValueRow.toString());
        // console.log(tempArrayCol)
        tempValueRow = [];
        tempValueCol = [];
    }

    for(let value of tempArrayRow){
        for(let valueCol of tempArrayCol){
            if(value === valueCol){
                countResult++
            }
        }
    }
        // console.log(tempArrayRow)
        // console.log(tempArrayCol)
    return countResult;
};


let grid = [[11,1],[1,11]];
console.log(equalPairs(grid));