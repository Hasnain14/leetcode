function countConsistentStrings(allowed: string, words: string[]): number {
    let count = 0;
        words.map((value) => {
            for(let i =0; i<value.length;i++){
                if(!allowed.includes(value[i])){
                    count--;
                    break;
                }
            }
            count++;
        })
    return count;
};

let allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"];

console.log(countConsistentStrings(allowed, words));

//  time and space O(n*m) where n is the number of words in the input array 
// and m is the average length of each word
// and O(1)