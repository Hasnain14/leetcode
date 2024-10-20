function differenceOfSums(n, m) {
    var sum = 0, divisibleSum = 0, count = 0, tempCheck = 0;
    sum = (n * (n + 1)) / 2;
    while (tempCheck < n && m <= n) {
        tempCheck = (m * (count++));
        if (tempCheck > n) {
            break;
        }
        else {
            divisibleSum += tempCheck;
        }
        console.log("t =" + tempCheck);
    }
    return sum - divisibleSum * 2;
}
;
var n = 1, m = 1;
console.log(differenceOfSums(n, m));
// time O(N) and space O(1)
