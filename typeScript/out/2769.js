function theMaximumAchievableX(num, t) {
    let maxAchieveNumber = num;
    while (t > 0) {
        maxAchieveNumber = maxAchieveNumber + 1 + 1;
        t--;
    }
    return maxAchieveNumber;
}
;
let num = 3, t = 2;
const result = theMaximumAchievableX(num, t);
console.log(result);
// time complexity O(n); n is equal to t
// space complexity O(1)
