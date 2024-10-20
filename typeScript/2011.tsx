function finalValueAfterOperations(operations: string[]): number {
    let X = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].includes("+"))
            X++;
        else {
            X--;
        }
    }
    return X;
};

let operations = ["--X", "X++", "X++"];

console.log(finalValueAfterOperations(operations));


// time O(N) space O(1)