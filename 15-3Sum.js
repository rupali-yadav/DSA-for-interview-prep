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
// Notice that the order of the output and the order of the triplets does not matter.


var threeSum = function (nums) {

    const results = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i <= nums.length - 3; i++) {

        // if previous num and current num are same skip the iteration
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        const number = nums[i];

        //if anchor > 0, remaining are > 0, can't sum to 0
        if (number > 0) break;

        let l = i + 1;
        let r = nums.length - 1;

        while (l < r) {
            const sum = number + nums[l] + nums[r]

            if (sum === 0) {
                results.push([number, nums[l], nums[r]])
                l++;
                r--;


                //skip duplicates for l because we want unique triplets
                while (l < r && nums[l] === nums[l - 1]) l++;

                // skip duplicates for r because we want unique triplets
                while (l < r && nums[r] === nums[r + 1]) r--;
            }
            else if (sum < 0) {
                // we need a bigger number 
                l++
            } else {
                // we need a smaller number 
                r--;
            }
        }
    }
    return results;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));