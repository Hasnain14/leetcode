function coloredCells(n: number): number {
    let count = 0;
    for(let i = 0; i < n; i++){
        count += 2*i + 1; 
    }
    return count*2 - (2*(n-1) + 1);
};

let n = 1;
console.log(coloredCells(n))

// another way

function coloredCells(n: number): number {
    return (n*n)*2 - (2*(n-1) + 1);
};

let n = 2;
console.log(coloredCells(n))