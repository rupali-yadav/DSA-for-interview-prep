// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]


//using map
function findKFrequentElements(nums, k) {


    // Step 1: Count the frequency of each element
    const frequencyMap = new Map();
    nums.forEach(num => {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    });

    // Step 2: Convert map entries to an array and sort it based on frequency
    const sortedFrequencies = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);
    debugger;

    // Step 3: Extract the first k element's keys
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(sortedFrequencies[i][0]);
    }

    return result;
}



// using object
function findKFrequentElements2(nums, k) {

    //  step 1: set up a count object to store count of each number
    const count = {};

    //  step 2 : loop through the nums[] 
    for (let num of nums) {

        // step 3 :
        // set count of each number in the count object by checking 
        // if count already exist for that number and then adding one to it

        count[num] = (count[num] || 0) + 1
    }

    // step 4 : sort the nums based on count in a descending order
    const sortedArray = Object.keys(count).sort((a, b) => count[b] - count[a]);

    // step 5 : Extract the first k elements
    return sortedArray.slice(0, k);
}


// Example usage
console.log(findKFrequentElements2([1, 1, 1, 2, 2, 3], 2)); // Output: [1,2]
console.log(findKFrequentElements2([1], 1)); // Output: [1]