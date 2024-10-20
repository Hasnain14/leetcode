function convertTemperature(celsius) {
    var output = [];
    output[0] = Number((celsius + 273.15).toFixed(5));
    output[1] = (celsius * 1.80 + 32.00).toFixed(5);
    return output;
}
;
var celsius = 36.50;
console.log(convertTemperature(celsius));
// time and space complexity 
