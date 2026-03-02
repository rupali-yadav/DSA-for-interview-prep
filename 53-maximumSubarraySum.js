

const maxSubArray = (nums) => {
    let bestSum = nums[0];
    let currSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i]);
        bestSum = Math.max(currSum, bestSum);
    }

    return bestSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))