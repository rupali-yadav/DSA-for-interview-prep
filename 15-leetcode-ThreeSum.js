// THREE SUM
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].


var threeSum = function (nums) {
    const result = [];
    let r = 0;
    let l = 0

    // step1- sort the array
    nums = nums.sort((a, b) => a - b);

    // step 2- loop thru the array with 3 pointers i, r- one that goes right, l - one that goes left 
    for (let i = 0; i < nums.length; i++) {

        //check if next num is same; if same skip it
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        r = i + 1;
        l = nums.length - 1;

        // while r and l do not collide do the sum and and compare with the target

        while (r < l) {

            const sum = nums[i] + nums[r] + nums[l];
            if (sum === 0) {
                result.push([nums[i], nums[r], nums[l]]);
                while (r < l && nums[r] === nums[r + 1]) r++;
                while (r < l && nums[l] === nums[l - 1]) l--;
                r++
                l--
            } else if (sum < 0) {
                // if sum is negative go towards right
                r++;
            }
            else if (sum > 0) {
                // if sum is positive go towards left

                l--;
            }
        }
    }

    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));