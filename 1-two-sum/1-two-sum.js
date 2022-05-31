/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let memo = {};
    for (let i = 0; i < nums.length; i++) {
        if (memo[target - nums[i]] !== undefined) {
            return [i, memo[target - nums[i]]];
        }
        memo[nums[i]] = i;
    }
};