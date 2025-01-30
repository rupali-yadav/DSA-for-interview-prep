// Product of Array Except Self

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


var productExceptSelf = function (nums) {
    const n = nums.length;


    const leftArr = new Array(n);
    // First element has no left elements, so set it to 1
    leftArr[0] = 1;

    const rightArr = new Array(n);
    // Last element has no right elements, so set it to 1
    rightArr[n - 1] = 1;

    // Create the result array to store the final output
    const result = new Array(n);

    // Step 1: Fill the leftArr where each index stores the product of all elements to its left
    for (let i = 1; i < n; i++) {
        leftArr[i] = leftArr[i - 1] * nums[i - 1];
        // Example for [1,2,3,4]: leftArr = [1, 1, 2, 6] 
        // Explanation: 
        // leftArr[1] = leftArr[0] * nums[0] => 1 * 1 = 1
        // leftArr[2] = leftArr[1] * nums[1] => 1 * 2 = 2
        // leftArr[3] = leftArr[2] * nums[2] => 2 * 3 = 6
    }

    // Step 2: Fill the rightArr where each index stores the product of all elements to its right
    for (let i = n - 2; i >= 0; i--) {
        rightArr[i] = rightArr[i + 1] * nums[i + 1];
        // Example for [1,2,3,4]: rightArr = [24, 12, 4, 1] 
        // Explanation:
        // rightArr[2] = rightArr[3] * nums[3] => 1 * 4 = 4
        // rightArr[1] = rightArr[2] * nums[2] => 4 * 3 = 12
        // rightArr[0] = rightArr[1] * nums[1] => 12 * 2 = 24
    }

    // Step 3: Compute the result array by multiplying leftArr and rightArr
    for (let i = 0; i < n; i++) {
        result[i] = leftArr[i] * rightArr[i];
        // Example for [1,2,3,4]: result = [24, 12, 8, 6] 
        // Explanation:
        // result[0] = leftArr[0] * rightArr[0] => 1 * 24 = 24
        // result[1] = leftArr[1] * rightArr[1] => 1 * 12 = 12
        // result[2] = leftArr[2] * rightArr[2] => 2 * 4 = 8
        // result[3] = leftArr[3] * rightArr[3] => 6 * 1 = 6
    }

    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]))