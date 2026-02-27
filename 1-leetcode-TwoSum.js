// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    const mp = new Map();

    // loop on the array
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            // return indices of current num and index of diff that we stored earlier
            return [map.get(diff), i];
        } else {
            // save current number key and the index as its value
            map.set(nums[i], i);
        }
    }

}

console.log(twoSum([3,3], 6));