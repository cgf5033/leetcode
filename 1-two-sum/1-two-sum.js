/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // create an empty object
    let memo = {};
    // loop over the nums array
    for (let i = 0; i < nums.length; i++) {
        // if target - number at current postion is in the object
        let numberNeeded = target - nums[i];
        if (memo[numberNeeded] !== undefined) {
            return [i, memo[numberNeeded]];
        }
        memo[nums[i]] = i;
            // return [i, object[target - number[i]]]
        // add to object -> key=number at index, value = index(i)
    }
};

// i: 
//     nums: array of integers (neg or pos)
//     target: integer (neg or pos)
// o: array of indices (add up to target)
// c: cant use same number twice
// e: none
