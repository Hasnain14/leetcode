function findPermutationDifference(s, t) {
    var totalSum = 0;
    for (var i = 0; i < s.length; i++) {
        totalSum = totalSum + Math.abs(i - t.indexOf(s[i]));
        console.log(t.indexOf(s[i]));
    }
    return totalSum;
}
;
var s = "abc", t = "bac";
console.log(findPermutationDifference(s, t));
