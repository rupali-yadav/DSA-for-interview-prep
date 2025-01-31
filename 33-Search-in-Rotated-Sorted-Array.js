// 33. Search in Rotated Sorted Array


// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4


var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid;

        // check if the left part of the arr is sorted 
        // otherwise check the right one
        if (nums[l] <= nums[mid]) {
            // check if target is between l and r pointers
            if (nums[l] <= target && target < nums[mid]) {
                //  reduce the window size bringing r closer
                r = mid - 1;
            } else {
                //  reduce the window size bringing l closer
                l = mid + 1;
            }
        } else {
            // let's find it in other half of the array
            if (nums[mid] < target && target <= nums[r]) {
                //  reduce the window size bringing l closer
                l = mid + 1;
            } else {
                //  reduce the window size bringing r closer
                r = mid - 1
            }

        }
    }
    return -1;
};