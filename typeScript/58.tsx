function lengthOfLastWord(s: string): number {
    let arr1 = s.trim().split(" ")
    let last = arr1.slice(-1)[0]
    return last.length
};