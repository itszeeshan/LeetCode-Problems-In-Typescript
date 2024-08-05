const reverseInt = (num: number): number => {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    const reversedStr = reverseString(Math.abs(num).toString());
    const reversedNum = parseInt(reversedStr) * Math.sign(num);

    if (reversedNum > INT_MAX || reversedNum < INT_MIN) {
        return 0;
    }

    return reversedNum;
}

const reverseString = (str: string): string => {
    return str.split('').reverse().join('');
}

console.log(reverseInt(123)); //output: 321
