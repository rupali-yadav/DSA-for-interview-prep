// 20. Valid Parentheses
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()[]{}"

// Output: true;

var isValid = function (s) {
    const stack = [];

    const pairs = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const isClosingBracket = (ch) => ch === ")" || ch === "]" || ch === "}";

    for (let bracket of s) {
        // if opening bracket push t o the stack
        if (pairs[bracket]) stack.push(bracket);
        else {
            if (isClosingBracket(bracket)) {
                const topBracket = stack.pop();

                // also check if they are matching pairs
                if (pairs[topBracket] !== bracket) return false;
            }

        }
    }
    return stack.length === 0
};

console.log(isValid("()"))