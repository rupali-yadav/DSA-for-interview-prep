
// 152. Maximum Product Subarray
// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.



// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.



var maxProduct = function (nums) {

    if (nums.length === 0) return 0;

    //  start with the consideration that 
    // the first number itself is the max product
    let result = nums[0];
    let minP = nums[0];
    let maxP = nums[0];


    for (let i = 1; i < nums.length; i++) {
        const current = nums[i];

        if (current < 0) {
            // if current num is negavtive swap the min and max products
            [minP, maxP] = [maxP, minP];
        }
        // the comparison should always be between 
        // the current and the product with the current number
        minP = Math.min(current, minP * current);
        maxP = Math.max(current, maxP * current);

        result = Math.max(result, maxP);

    }
    return result;
};