function canJump(nums: number[]): boolean {
 let maxReach = 0;
for (let i = 0; i < nums.length; i++) {
 if (i > maxReach) {
 return false;
 }
 maxReach = Math.max(maxReach, i + nums[i]);
 }
return maxReach >= nums.length - 1;
}
console.log(canJump([2, 3, 1, 1, 4])); // Output: true
