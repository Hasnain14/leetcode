function findWordsContaining(words: string[], x: string): number[] {
    let reultArray: number[] = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            reultArray.push(i);
        }
    }
    return reultArray;
};

let words = ["abc", "bcd", "aaaa", "cbc"], x = "z";

console.log(findWordsContaining(words, x));

// time N(n*m) where n is the number of words in the input array
// and m is the average length of each word
//  space O(1)