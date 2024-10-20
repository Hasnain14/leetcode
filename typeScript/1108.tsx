function defangIPaddr(address: string): string {
    return address.replaceAll(".", "[.]");
};

let address = "1.1.1.1";

console.log(defangIPaddr(address));

// time and space O(N) because replaceAll create a new array with replaced value