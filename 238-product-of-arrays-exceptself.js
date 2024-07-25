// Product of Array Except Self

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


var productExceptSelf = function (nums) {
    const n = nums.length;

    let result = new Array(n);

    let leftArr = new Array(n);
    let rightArr = new Array(n);

    leftArr[0] = 1;
    rightArr[n - 1] = 1;

    // prefix array // [1,1,2,6]
    for (let i = 1; i < n; i++) {
        debugger;
        leftArr[i] = nums[i - 1] * leftArr[i - 1];
    }

    // postfix array // [24,12,4,1]
    for (let i = n - 2; i >= 0; i--) {
        debugger;
        rightArr[i] = nums[i + 1] * rightArr[i + 1];
    }
    
    // [1,1,2,6] * [24,12,4,1]
    for (let i = 0; i < n; i++) {
        result[i] = leftArr[i] * rightArr[i];
    }


    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]))