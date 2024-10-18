function scoreOfString(s: string): number {
    let sum = 0;
    for (let i = 0; i < s.length - 1; i++) {
        sum = sum + Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
    }
    return sum;
};

let s = "zaz";

const result = scoreOfString(s);
console.log(result);

// time complexity O(n)
// space complexity O(1) because space used by function is sum and i variable