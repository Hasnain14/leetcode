var plusOne = function (digits) {
  let n = BigInt(0),
    l = digits.length;
  n = BigInt(digits.join(""));
  // for (let i = 0; i < digits.length; i++) {
  //   n = n + BigInt(digits[i] * Math.pow(10, l - 1));
  //   l -= 1;
  // }
  console.log(n);
  n += BigInt(1);
  return n.toString().split("").map(Number);

  // let k = 0;
  // while (n > 0) {
  //   digits[k] = Number(BigInt(n % BigInt(10)));
  //   n = n / BigInt(10);
  //   k += 1;
  // }
  // return digits.reverse();
};

let digits = [
  7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7,
  4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6,
];

let res = plusOne(digits);
console.log(res);
