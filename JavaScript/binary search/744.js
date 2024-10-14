
var nextGreatestLetter = function(letters, target) {
    let l = 0, r = letters.length - 1, mid = 0;

    if(letters[r] <= target){
        return letters[0];
    }

    while(l <= r){
        mid = Math.floor((l + r)/2);

        if (letters[mid] === target && mid < letters.length-1) {
                while(letters[mid] == letters[mid + 1]){
                    mid++;
                }
                return letters[mid + 1];
            
        }else if (letters[mid] > target) {
            r = r - 1;
        }else{
            l = l + 1;
        }
    }

        return letters[mid];
};

const letters = ["c","f","j"];
let target = "k";

let res = nextGreatestLetter(letters, target);

console.log(res);