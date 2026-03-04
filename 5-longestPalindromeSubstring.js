



function longestPalindrome(s) {

  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l].toLowerCase() === s[r].toLowerCase()) {
      // expand from the center towards outside
      l--;
      r++;
    }
    // When loop breaks, l and r are OUTSIDE the palindrome by 1 step
    // So actual palindrome is from l+1 to r-1
    return [l + 1, r - 1];
  }


  if (s.length <= 1) return s;

  const bestStart = 0; bestEnd = 0;
  for (let i = 0; i < s.length; i++) {
    // same center for left and right in odd palindrome
    const [oddStrt, oddEnd] = expand(i, i);
    // two separate center elements for left and right in even palindromes
    const [evenStart, evenEnd] = expand(i, i + 1);

    const oddLen = oddEnd - oddStrt + 1;
    const evenLen = evenEnd - evenStart + 1;

    let currStart; let currEnd;

    if (oddLen > evenLen) {
      currStart = oddStrt;
      currEnd = oddEnd;
    } else {
      currStart = evenStart;
      currEnd = evenEnd;
    }

    const currLen = currEnd - currStart + 1;
    const bestLen = bestEnd - bestStart + 1;

    if (currLen > bestLen) {
      bestStart = currStart;
      bestEnd = currEnd;
    }

  }

  // +1 because thats how slice works, strt index is included but not end
  return s.slice(bestStart, bestEnd + 1);
}