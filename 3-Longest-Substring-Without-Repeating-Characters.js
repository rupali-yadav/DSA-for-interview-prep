
// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.




var lengthOfLongestSubstring = function (s) {
    const lastSeen = new Map();
    // the only aim is to update the set with the index of the character 
    // and according maintain the window i.e move left and right

    let left = 0; let maxLen = 0;

    for (let r = 0; r < s.length; r++) {
        const char = s[r];

        if (lastSeen.has(char)) {
            left = Math.max(left, lastSeen.get(char) + 1)
        }

        // update the set with latest index of char
        lastSeen.set(char, r);

        // find the length
        maxLen = Math.max(maxLen, r - left + 1);
    }

    return maxLen;
}


console.log(lengthOfLongestSubstring("abcabcbb"))
