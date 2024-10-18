function scoreOfString(s) {
    var sum = 0;
    for (var i = 0; i < s.length - 1; i++) {
        sum = sum + Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return sum;
}
;
var s = "zaz";
var result = scoreOfString(s);
console.log(result);
