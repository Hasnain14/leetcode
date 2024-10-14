//  acronym of words

const acronym = (words, s) => {
    let temp = true;
    if(words.length == s.length){
        for (let i = 0; i < s.length; i++){   
        
            temp = temp & words[i].startsWith(s[i]); 
        }
    }
    else
        temp = false
   return temp;
    // console.log(temp)
}

const words = ["alice","bob","charlie"];
let s = "abc";

const result = acronym(words,s);
console.log(result);