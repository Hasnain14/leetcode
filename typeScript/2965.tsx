function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let missing:number = 0, repeat:number = 0, check:number = 0;
    let temp1D:number[] = [].concat(...grid);
    const numArry:number[] = new Array(temp1D.length+1).fill(0);
    temp1D.map(value => numArry[value - 1]++)

    // console.log(numArry)

    for(let i = 0; i < temp1D.length; i++){
        if(numArry[i] === 2) repeat = i+1;
        if(numArry[i] === 0) missing = i+1;
    }
    return [repeat,missing]
};

let grid = [[1,3],[2,2]];
console.log(findMissingAndRepeatedValues(grid));

// [[9,1,7],[8,9,2],[3,4,6]]