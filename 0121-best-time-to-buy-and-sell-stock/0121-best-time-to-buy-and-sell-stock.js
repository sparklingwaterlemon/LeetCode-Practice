
// @param {number[]} prices
// @return {number}

let testCase = [5, 11, 1, 4, 2, 9, 8];

var maxProfit = function (price) {
    let buy_price = price[0];
    let max_profit = 0;

    for (let i = 0; i < price.length; i++) {
        buy_price = Math.min(buy_price, price[i]);
        max_profit = Math.max(max_profit, price[i] - buy_price);
    };

    console.log(max_profit);
};

maxProfit(testCase);

