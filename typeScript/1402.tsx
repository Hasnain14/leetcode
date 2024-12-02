function maxSatisfaction(satisfaction: number[]): number {
    let maxSum = 0, sum = 0;
    let sorted = satisfaction.sort((a, b) => b - a);
    for (let i = 0; i < sorted.length; i++) {
        sum += sorted[i];
        if (sum < 0) {
            break;
        } else {
            maxSum += sum
        }
    }
    // console.log(sorted);
    return maxSum;
};

let satisfaction = [-1, -8, 0, 5, -9];
console.log(maxSatisfaction(satisfaction))