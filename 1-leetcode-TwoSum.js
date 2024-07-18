const twoSum = (nums, target) => {
    const mp = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            // return indices of current num and index of diff that we stored earlier
            return [map.get(diff), i];
        } else {
            // save current number key and the index as its value
            map.set(nums[i], i);
        }
    }

}

console.log(twoSum([3,3], 6));