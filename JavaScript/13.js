var romanToInt = function(s1) {
//    let I =1,
//         V = 5,
//         X = 10,
//         L = 50,
//         C = 100,
//         D = 500,
//         M = 1000; 
    let number = 0;
    const s = [0];

    for (let i = 0; i < s1.length; i++) {
        switch (s1[i]) {
            case "I":
              s[i] = 1;
              break;
            case "V":
              s[i] = 5;
              break;
            case "X":
                s[i] = 10;
                break;
            case "L":
                s[i] = 50;
                break;
             case "C":
              s[i] = 100;
              break;
            case "D":
              s[i] = 500;
              break;
            case "M":
              s[i] = 1000;
              break;
           
          }
        
    }
    console.log(s);
        for (let i = 0; i < s.length; i++) {
            if(s[i] < s[i+1]){
                number = number + parseInt(s[i+1] - s[i]);
                i++;
            }else{
                number = number + parseInt(s[i]);
            }
            
        }

        console.log(number);
};

const s = "MCMXCIV";
romanToInt(s);