function partitionLabels(s: string): number[] {
    const resultArray: number[] = [];
    let start:number = 0;
    let end:number = 0;

    for (let i = 0; i < s.length; i++) {
        // const char = s[i];
        const lastIndex = s.lastIndexOf(s[i]);

        // Update the end index if the current character's last occurrence is beyond the current partition end
        end = Math.max(end, lastIndex);

        // If we reach the end of the current partition
        if (i === end) {
            // Push the length of the current partition to the result
            resultArray.push(end - start + 1);
            // Move the start index to the next character
            start = i + 1;
        }
    }

    return resultArray;
}

let s = "ababcbacadefegdehijhklij";
console.log(partitionLabels(s)); // Output: [9, 7, 8]
