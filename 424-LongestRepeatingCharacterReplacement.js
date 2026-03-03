// Problem in simple words

// You have a string s (uppercase A–Z) and an integer k.

// You can change at most k characters in any substring so that all characters in that substring become the same.

// Return the length of the longest such substring.

// Example:

// s = "ABAB", k = 2 → change 2 chars → "AAAA" length 4

// s = "AABABBA", k = 1 → answer 4

var characterReplacement = function (s, k) {
    // keep track of each letter's count in an array
    // to ease thing substract ascii value of A : 65; so that A is stored at letterCount[0]
    const letterCount = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let maxLen = 0;

    for (let r = 0; r < s.length; r++) {

        const charIndex = s.charCodeAt(r) - 65;
        // update the count
        letterCount[charIndex]++;
        // update maxFreq 
        maxFreq = Math.max(maxFreq, letterCount[charIndex]);

        // replacementsNeeded = windowLen - maxFreq

        while ((r - left + 1) - maxFreq > k) {
            // shrink the window from left
            // no longer the char is in the window so reduce its count
            const leftCharIndex = s.charCodeAt(left) - 65;
            letterCount[leftCharIndex]--;
            left++;
        }
        // max of prev maxLen and current window length
        maxLen = Math.max(maxLen, r - left + 1);

    }

    return maxLen;

};

console.log(characterReplacement("AABABBA", 1));
