/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let memo = {};
    for (let i = 0; i < nums.length; i++) {
        let numberNeeded = target - nums[i];
        if (memo[numberNeeded] !== undefined) {
            return [i, memo[numberNeeded]];
        }
        memo[nums[i]] = i;
    }
};
