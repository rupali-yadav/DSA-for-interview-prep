function trap(height) {
    const n = height.length;
    let water = 0;

    const leftHeightArr = new Array(n);
    const righHeighttArr = new Array(n);

    leftHeightArr[0] = height[0];
    righHeighttArr[n - 1] = height[n - 1]

    // fill the left arr from left to right
    for (let i = 1; i < n; i++) {
        leftHeightArr[i] = Math.max(height[i], leftHeightArr[i - 1]);
    }

    // fill the right arr from right to left
    for (let i = n - 2; i >= 0; i--) {
        righHeighttArr[i] = Math.max(height[i], righHeighttArr[i + 1]);
    }

    for (let i = 0; i < n; i++) {
        water = water + (Math.min(leftHeightArr[i], righHeighttArr[i]) - height[i]);
    }
    return water;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); //6