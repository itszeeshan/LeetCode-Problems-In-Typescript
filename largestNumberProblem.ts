function largestNumber(nums: number[]): string {
    const numToString = nums.join('').toString();
    const breakString = numToString.split('').sort((a: string, b: string) => parseInt(b) - parseInt(a)).join('').toString()
    return breakString;
};

console.log(largestNumber([3,30,34,5,9])) //Output: 9534330
