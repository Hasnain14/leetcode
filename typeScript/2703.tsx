type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
    let len = args.length;

    return len;
};


const out = argumentsLength(5, 2, null, {}, "3");

console.log(out);

// time and space complexity O(1)