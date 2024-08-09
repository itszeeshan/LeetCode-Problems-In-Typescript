const encode = (strs: string[]): string => {
    return strs.reduce((acc, str) => acc + `${str.length}#${str}`, '');
}

const decode = (str: string): string[] => {
    const result: string[] = [];
    let i = 0;

    while (i < str.length) {
        const j = str.indexOf('#', i);
        const length = parseInt(str.slice(i, j), 10);
        result.push(str.slice(j + 1, j + 1 + length));
        i = j + 1 + length;
    }

    return result;
}

const encodedStr = encode(["hello", "world"]);
console.log(encodedStr); //Output: 5#hello5#world
console.log(decode(encodedStr)); //Output: ["hello", "world"]
