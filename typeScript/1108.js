function defangIPaddr(address) {
    return address.replaceAll(".", "[.]");
}
;
var address = "1.1.1.1";
console.log(defangIPaddr(address));
// time and space O(N) because replaceAll create a new array with replaced value
