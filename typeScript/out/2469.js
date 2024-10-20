function convertTemperature(celsius) {
    let output = [];
    output[0] = Number((celsius + 273.15).toFixed(5));
    output[1] = Number((celsius * 1.80 + 32.00).toFixed(5));
    return output;
}
;
let celsius = 36.50;
console.log(convertTemperature(celsius));
// time and space complexity O(1)
