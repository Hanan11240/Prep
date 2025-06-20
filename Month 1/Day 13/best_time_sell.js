// Approach 1 By exploring all possible pairs - O(n^2) Time and O(1) Space
// The idea is to use two nested loops to explore all the possible ways to buy and sell stock. The outer loop decides the day to buy the stock and the inner loop decides the day to sell the stock. The maximum difference between the selling price and buying price between every pair of days will be our answer. 
// function maxProfit(arr) {
//     profit = 0;
//     const arrLength = arr.length;
//     for (let i = 0; i < arrLength - 1; i++) {

//         for (j = i + 1; j < arrLength; j++) {

//                 profit = Math.max(profit, arr[j] - arr[i])

//         }
//     }
//     return profit
// }


// let prices = [7, 10, 1, 3, 6, 9, 2];
// console.log(maxProfit(prices));


// In order to maximize the profit, we need to minimize the cost price and maximize the selling price. So at every step, we keep track of the minimum buy price of stock encountered so far. For every price, we subtract with the minimum so far and if we get more profit than the current result, we update the result.



function maxProfit(arr) {
    let minimum = arr[0];
    let profit=0;

    for (let i = 1; i < arr.length; i++) {
        minimum = Math.min(minimum, arr[i]);

        profit = Math.max(profit,arr[i] - minimum);
    }
}





let prices = [7, 10, 1, 3, 6, 9, 2];
console.log(maxProfit(prices));

