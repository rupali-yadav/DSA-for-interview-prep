// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1,2,3,4]

// Output: false
// Explanation:
// All elements are distinct.

// option 1
const containsDuplicate = (nums) => {

    const seenNumbers = new Set();

    for (const num of nums) {
        if (seenNumbers.has(num)) return true;
        else seenNumbers.add(num);
    }

    return false;
}

// option 2
const containsDuplicate2 = (nums) => {

    // duplicates are automatically ignored in a set.
    return nums.length !== new Set(nums).size;

}