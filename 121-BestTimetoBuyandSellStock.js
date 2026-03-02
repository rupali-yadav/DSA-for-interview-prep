// 121. Best Time to Buy and Sell Stock
// Easy
// Topics
// premium lock icon
// Companies
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


var maxProfit = function (prices) {

    // there are only two aspects in this  simple question
    // 1. when to buy a stock - when the cost price is the least
    // 2. when to sell - when the profit is maximum

    const maxProfit = 0;
    const bestPriceToByStock = prices[i];

    for (let i = 0; i < prices.length; i++) {
        bestPriceToByStock = Math.min(bestPriceToByStock, prices[i]);

        maxProfit = Math.max(maxProfit, prices[i] - bestPriceToByStock);
    }


    return maxProfit;

};