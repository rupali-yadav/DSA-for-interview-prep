
var longestCommonPrefix = function (strs) {
    // initialize a tracker to tracker  the words +  each letter of the words
    let i = 0;

    // check if there's only one string in the array
    if (strs.length === 1) {
        return strs[0]
    } else {


        //  take first string as the fixed word 
        // and compare its each letter at ith index to 
        // each letter of other words in the array at same index 

        // while the character at every index of each string is same
        while (strs[0][i] && strs.every((word) => word[i] === strs[0][i])) {

            i++;
        }
    }
    // when the while breaks this will be executed
    // return the substring of the first string up to the index where the prefix ends
    return strs[0].substr(0, i);
};

console.log(longestCommonPrefix(["c", "acc", "ccc"]));
// Output: ""
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// Output: "fl"