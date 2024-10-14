var intToRoman = function(num) {

    const ones = ["","I","II","III","IV","V","VI","VII","VIII","IX"];
    const tens = ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"];
    const hundred  = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"];
    const thousand = ["","M","MM","MMM"];

    let rmn = thousand[Math.floor(num/1000)] + hundred[(Math.floor(num/100))%10] + tens[(Math.floor(num/10))%10] + ones[num %10];

    console.log(rmn);
};

intToRoman(1994);