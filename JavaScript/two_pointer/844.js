
var backspaceCompare = function(s, t) {
    let s_length = s.length,
        t_length = t.length;
        const s_temp = [], t_temp = [];

        for (let i = 0; i < s_length; i++) {
           if (s[i] == "#") {
            s_temp.pop();
           }else{
            s_temp.push(s[i]);
           }
        }

        for (let i = 0; i < t_length; i++) {
            if (t[i] == "#") {
                t_temp.pop();
            }else{
                t_temp.push(t[i]);
            }
         }

        // return t_temp;
        return t_temp.join() === s_temp.join(); // join method make array into string
};

let s = "xywrrmp", t = "xywrrmu#p";

let res = backspaceCompare(s,t);
console.log(res);