function minZeroArray(nums: number[], queries: number[][]): number {
    const n = nums.length;
    const counts = new Array(n + 1).fill(0);
    let k = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        const num = nums[i];
        while (sum + counts[i] < num) {
            if (k === queries.length) return -1;
            const [left, right, value] = queries[k];
            k++;

            if (right < i) continue;
            counts[Math.max(left, i)] += value;
            counts[right + 1] -= value;
        console.log("hhjh="+counts)
        }
        console.log("hhjh"+counts,sum)
        sum += counts[i];
    }
    return k;
}

let nums = [7,6,8], queries = [[0,0,2],[0,1,5],[2,2,5],[0,2,4]]
console.log(minZeroArray(nums,queries))

// [2,0,2], queries = [[0,2,1],[0,2,1],[1,1,3]]
// [7,6,8], queries = [[0,0,2],[0,1,5],[2,2,5],[0,2,4]]