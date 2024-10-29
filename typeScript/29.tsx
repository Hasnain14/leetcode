// {Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

//     The integer division should truncate toward zero, which means losing its fractional part. For example, 
// 8.345 would be truncated to 8, and -2.7335 would be truncated to -2.

//     Return the quotient after dividing dividend by divisor.

//  Note: Assume we are dealing with an environment that could only store integers within the 32-bit signed 
// integer range: [−231, 231 − 1]. For this problem, if the quotient is strictly greater than 231 - 1, then return 231 - 1, 
// and if the quotient is strictly less than -231, then return -231.}

function divide(dividend: number, divisor: number): number {
    let output = 0;
    const lowerLimt: number = Math.pow(-2, 31);
    const upperLimit: number = Math.pow(2, 31) - 1;
    let signOfresult = Math.sign(dividend) * Math.sign(divisor);
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        let tempOutPut = 1;
        let tempdivisor = divisor;
        while (tempdivisor <= (dividend >> 1)) {
            tempdivisor <<= 1;
            tempOutPut <<= 1;
        }
        dividend -= tempdivisor;
        output += tempOutPut;
    }
    output = output * signOfresult;
    if (output < lowerLimt) output = lowerLimt;
    else if (output > upperLimit) output = upperLimit;
    return output;
};

let dividend = 31, divisor = 1;

console.log(divide(dividend, divisor))