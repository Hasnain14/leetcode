function initialize2DArray(rows: number, cols: number): number[][] {
    let array: number[][] = [];
    for (let i = 0; i < rows; i++) {
        array.push(new Array(cols).fill(0));
    }
    return array;
}


const findMax = (grid:number[][],m:number,n:number) : number => {
    let maxValue = 0;
     for(let i =m; i<= m+2; i++){
        for(let j =n; j<= n+2; j++){
           if(maxValue < grid[i][j]){
            maxValue = grid[i][j];
           }
        }
    }
    return maxValue;
}

function largestLocal(grid: number[][]): number[][] {
    let rowColomn = grid.length - 2;
    let resultGrid = initialize2DArray(rowColomn, rowColomn);;

    for(let i =0; i< grid.length-2; i++){
        for(let j =0; j< grid.length-2; j++){
           resultGrid[i][j] = findMax(grid,i,j);
        }
    }
    return resultGrid;
};

let grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]];

console.log(largestLocal(grid));
