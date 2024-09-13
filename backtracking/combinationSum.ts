function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(remain: number, combo: number[], start: number): void {
        if (remain < 0) {
            return;
        }

        if (remain === 0) {
            result.push([...combo]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            combo.push(candidates[i]);
            backtrack(remain - candidates[i], combo, i);
            combo.pop();
        }
    }

    backtrack(target, [], 0);
    return result;
}

const candidates = [2, 3, 6, 7];
const target = 7;
console.log(combinationSum(candidates, target)); // Output: [[2, 2, 3], [7]]
