function predictPartyVictory(senate: string): string {
    let s = [...senate]
    let lastIndexD:number = 0;
    let lastIndexR:number = 0;
    // console.log(check)

    while((s.includes("D") || s.includes("R")) && s.length > 1){
        if((s[0] === "D" && !s.includes("R")) || (s[0] === "R" && !s.includes("D"))){
                return s[0] === "R" ? "Radiant" : "Dire";
        }        
        lastIndexD = s.indexOf("D");
        lastIndexR = s.indexOf("R");
        // console.log(lastIndexD, lastIndexR)
        // console.log(s)
        if(lastIndexD > lastIndexR){
            s.push("R");
            s.splice(lastIndexD,1);
            s.shift();
        }else{
            s.push("D");
            s.splice(lastIndexR,1);
            s.shift();
        }
    }
    // console.log(s)
    return s.join("") === "R" ? "Radiant" : "Dire";
};

let senate = "RR";
console.log(predictPartyVictory(senate))

// "DDRRRR" R
// "DRRD" D
// "DRDRR" R
