
// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.




var lengthOfLongestSubstring = function (s) {
    const charMap = new Map();

    let maxLen = 0; let l = 0;

    for (let r = 0; r < s.length; r++) {

        if (charMap.has(s[i])) {
            // remove the character from window frame that was encountered again
            // to do that update the left pointer

            l = Math.max(l, charMap.get(s[r]) + 1);

        }
        charMap.set(s[r], r);
        maxLen = Math.max(maxLen, r - l + 1);

    }

    return maxLen;
}