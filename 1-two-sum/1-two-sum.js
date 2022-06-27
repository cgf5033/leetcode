/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// memo[number needed] = index

var twoSum = function(nums, target) {
    let memo = {};
    for (let i = 0; i < nums.length; i++) {
        if (memo[target - nums[i]] !== undefined) {
                return [memo[target - nums[i]], i];
        }
        memo[nums[i]] = i;
    }
};
