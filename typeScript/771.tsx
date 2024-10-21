function numJewelsInStones(jewels: string, stones: string): number {
    let count = 0;
    for (let i = 0; i < jewels.length; i++) {
        count += stones.split(jewels[i]).length - 1;
    }
    return count;
};

let jewels = "aA", stones = "aAAbbabb";

console.log(numJewelsInStones(jewels, stones));

// time N(n*m) where n is the length of the jewels string and  m is the length of the stones string
//  space O(1)