function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
  let j = s.length - 1;
  for(let i = 0; i < Math.ceil(s.length / 2); i++){
    if(s[i] != s[j]){
        return false;
    }
    j--;
  }
  return true;  
};

let string = '0p';
// string = string.replace(/[^A-Za-z0-9]/g, '');
console.log(isPalindrome(string));