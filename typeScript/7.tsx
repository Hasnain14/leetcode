// (Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes
//  the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).)


function reverse(x: number): number {
    const lowerLimt: number = Math.pow(-2, 31);
    const upperLimit: number = Math.pow(2, 31) - 1;

    let reverseNumber = parseInt(x.toString().split("").reverse().join("")) * Math.sign(x);
    return reverseNumber > upperLimit || reverseNumber < lowerLimt ? 0 : reverseNumber;
};

let x = -1534236469;

console.log(reverse(x));