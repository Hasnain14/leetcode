function argumentsLength(...args) {
    let len = args.length;
    return len;
}
;
const out = argumentsLength(5, 2, null, {}, "3");
console.log(out);
// time and space complexity O(1)
