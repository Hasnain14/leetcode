function finalValueAfterOperations(operations) {
    var X = 0;
    for (var i = 0; i < operations.length; i++) {
        if (operations[i].includes("+"))
            X++;
        else {
            X--;
        }
    }
    return X;
}
;
var operations = ["--X", "X++", "X++"];
console.log(finalValueAfterOperations(operations));
// time O(N) space O(1)
