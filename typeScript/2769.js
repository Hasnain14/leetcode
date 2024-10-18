function theMaximumAchievableX(num, t) {
    var maxAchieveNumber = num;
    while (t > 0) {
        maxAchieveNumber = maxAchieveNumber + 1 + 1;
        t--;
    }
    return maxAchieveNumber;
}
;
var num = 3, t = 2;
var result = theMaximumAchievableX(num, t);
console.log(result);
