class SubrectangleQueries {
rectangle: number[][];
    constructor(rectangle: number[][]) {
       this.rectangle = rectangle;
    }

    updateSubrectangle(row1: number, col1: number, row2: number, col2: number, newValue: number): void {
        for(let i = row1; i <= row2; i++){
            for(let j = col1; j <= col2; j++){
                this.rectangle[i][j] = newValue;
            }
        }
    }

    getValue(row: number, col: number): number {
        return this.rectangle[row][col];
    }
}

const subrectangleQueries = new SubrectangleQueries([[1,2,1],[4,3,4],[3,2,1],[1,1,1]]);
subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
console.log(subrectangleQueries.getValue(0, 2))


/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */