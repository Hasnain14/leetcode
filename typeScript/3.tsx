function lengthOfLongestSubstring(s: string): number {
    let i = 1, maxLength = 1;
    let start = 0, end = 1;
    if(s.length < 1){return 0}
while(end <= s.length){
    let tempString = s.substring(start, end)
    if(tempString.includes(s[i])){
        start++;
    }else{
        end++ ;
        i++;   
    }
    if(tempString.length > maxLength){
            maxLength = tempString.length;
    }
}
return maxLength;
};
let s = "au"
console.log(lengthOfLongestSubstring(s))