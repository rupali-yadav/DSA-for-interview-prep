// 153. Find Minimum in Rotated Sorted Array


// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.


// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.


var findMin = function (nums) {

    // use two pointer approach
    // find mid
    // then decide which pointer to move

    let l = 0,  r = nums.length - 1;

    while (l < r) {

        let mid = Math.floor((l + r) / 2);

        // if middle number is greater than the last number
        if (nums[mid] > nums[r]) {
            // bring left to the next number of mid
            l = mid + 1;
        } else {
            // right can come to mid as the min number 
            // must be then in the other half of the array
            r = mid;
        }

    }
    return nums[l];

};