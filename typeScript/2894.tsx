function differenceOfSums(n: number, m: number): number {
    let sum = 0, divisibleSum = 0, count = 0, tempCheck = 0;

    sum = (n * (n + 1)) / 2;

    while (tempCheck < n && m <= n) {
        tempCheck = (m * (count++))
        if (tempCheck > n) {
            break
        } else {
            divisibleSum += tempCheck;
        }
        // console.log("t =" + tempCheck);
    }

    return sum - divisibleSum * 2;
};

let n = 10, m = 3;

console.log(differenceOfSums(n, m));

// time O(N) and space O(1)