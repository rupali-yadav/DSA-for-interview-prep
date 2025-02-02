// 371. Sum of Two Integers

// Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

// Example 1:

// Input: a = 1, b = 2
// Output: 3


var getSum = function (a, b) {

    while (b !== 0) {
        // calculate the carry separately
        // AND + left shift gives us carry
        let carry = (a & b) << 1;
        // sum without carry
        a = a ^ b;

        // b becomes the new carry
        b = carry;

    }
    return a;

};