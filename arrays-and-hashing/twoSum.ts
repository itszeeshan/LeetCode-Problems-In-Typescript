const twoSum = (nums: number[], target: number): number[] => {
    const numToIndexMap = new Map<number, number>();

    for (const [index, num] of nums.entries()) {
        const complement = target - num;

        if (numToIndexMap.has(complement)) {
            return [numToIndexMap.get(complement)!, index];
        }

        numToIndexMap.set(num, index);
    }

    throw new Error("No two numbers add up to the target");
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
// Output: [0,1]
