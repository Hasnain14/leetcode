function argumentsLength() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var len = args.length;
    return len;
}
;
var out = argumentsLength(5, 2, null, {}, "3");
console.log(out);
// time and space complexity O(1)
