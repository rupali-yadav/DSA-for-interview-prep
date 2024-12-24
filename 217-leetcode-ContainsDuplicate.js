// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.


var containsDuplicate = function (nums) {
    // solution1: using a Set
    const seenNums = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (seenNums.has(nums[i])) {
            return true;
        } else {
            seenNums.add(nums[i]);
        }
    }
    return false;

    // solution2: comparing length/size of array and the set created from the array
    return new Set(nums).size !== nums.length;
};