// 11. Container With Most Water


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.


var maxArea = function (heights) {


    // follow two pointer approach to track width and height

    let l = 0;
    let r = heights.length - 1;

    let maxWater = 0;

    while (l < r) {
        // find the feasible height
        // we cannot take max as the water will spill from the other end
        const h = Math.min(heights[l], heights[r]);
        const w = heights[r] - heights[l];

        // area of a rectangle is h*w
        maxWater = Math.max(maxWater, h * w);

        if (heights[l] < heights[r]) {
            l++;
        } else {
            r--;
        }
    }

    return maxWater;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);