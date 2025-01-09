let gcd = (a:number,b:number):number =>{
    if(b === 0){
        return a;
    }
    return gcd(b, a % b);
}
function gcdOfStrings(str1: string, str2: string): string {
   
    if(str2 + str1 !== str1 + str2){
        return ""
    }
    let gcdLength = gcd(str1.length, str2.length);
    console.log(gcdLength)
    return str1.substring(0,gcdLength);
};

let str1 = "ABABAB", str2 = "ABAB"
console.log(gcdOfStrings(str1,str2))