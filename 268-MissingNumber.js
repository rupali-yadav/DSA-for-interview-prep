// 268. Missing Number

// Example 1:

// Input: nums = [3,0,1]

// Output: 2

var missingNumber = function (nums) {
    // sort in ascending
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        // the numms are in range 0 - n
        //  so if we start loop at 0;
        // and compare num[i] should match i in each iteration
        if (nums[i] !== i) return i;
    }
    return nums.length;
};