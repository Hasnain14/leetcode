function findPermutationDifference(s: string, t: string): number {
    let totalSum = 0;
    for (let i = 0; i < s.length; i++) {
        totalSum = totalSum + Math.abs(i - t.indexOf(s[i]));

        // console.log(t.indexOf(s[i]));
    }
    return totalSum;
};

let s = "abc", t = "bac";

console.log(findPermutationDifference(s, t));

// time and space O(N) and O(1)