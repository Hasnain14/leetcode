function reverseWords(s: string): string {
    let reverseString : string = "";
    reverseString = s.split(" ").filter(value => value != "").reverse().join(" ");
    return reverseString;
};

let s = "a good   example"

console.log(reverseWords(s))