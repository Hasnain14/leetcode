function minOperations(grid: number[][], x: number): number {
    const grid1D : number[] = [];

    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length;j++){
            grid1D.push(grid[i][j])
        }
    }

    grid1D.sort((a,b) => a - b)

    let midValue:number = grid1D[Math.floor(grid1D.length / 2)];

    let numberOfOperation :number = 0;

    for(let i = 0; i < grid1D.length; i++){
        let value : number = midValue - grid1D[i];
        if(value >= 0){
            if(value % x === 0){
                numberOfOperation += (value / x)
            }else{
                return - 1
            }
        }else{
            value = value * -1
            if(value % x === 0){
                numberOfOperation += (value / x)
            }else{
                return - 1
            }
        }
        
    }

    return numberOfOperation;

    
};

let grid = [[1,5],[2,3]], x = 1;
console.log(minOperations(grid,x));