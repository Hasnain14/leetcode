var romanToInt = function(s) {
    //    let I =1,let
    //         V = 5,
    //         X = 10,
    //         L = 50,
    //         C = 100,
    //         D = 500,
    //         M = 1000; 
        let number = 0;
        const temp_str = [0];
        for (let i = 0; i < s.length; i++) {
            
            
                if(s[i]== "I")
                  temp_str[i] = 1;
                if(s[i]== "V")
                  temp_str[i] = 5;
                if(s[i]== "X")
                    temp_str[i] = 10;  
                if(s[i]== "L")
                    temp_str[i] = 50;   
                 if(s[i]== "C")
                  temp_str[i] = 100;
                if(s[i]== "D")
                  temp_str[i] = 500;  
                if(s[i]== "M")
                  temp_str[i] = 1000;
            
        }
    
            for (let i = 0; i < temp_str.length; i++) {
                if(temp_str[i] < temp_str[i+1]){
                    number = number + parseInt(temp_str[i+1] - temp_str[i]);
                    i++;
                }else{
                    number = number + parseInt(temp_str[i]);
                }
                
            }
    
            console.log(number);
    };
    
    const temp_str = "MCMXCIV";
    romanToInt(temp_str);