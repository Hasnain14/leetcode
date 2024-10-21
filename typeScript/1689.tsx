function minPartitions(n: string): number {
    let result = [];
    result = n.split("");
    result = result.map(Number)
    // console.log((result));
    return Math.max(...result);
};

let n = "82734";

console.log(minPartitions(n));

// time N(N)
//  space O(1)