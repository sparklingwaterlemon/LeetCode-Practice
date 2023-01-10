// messing around with two pointers..

// hard to read version...
let stock = [ 7, 3, 4, 5, 8, 2, 3, 4, 1, 3 ];
//            0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

var maxProfit1 = function(prices){
    let profit = 0;
    for( let left = prices[0], right = 1 ; right < prices.length ; right++){
        profit = Math.max( profit, prices[right] - left );
        left = Math.min( left, prices[right] );
    }
    console.log(profit);
    return profit;
};
maxProfit1(stock);


// something easier to understand..
// better readability
function maxProfit2(prices){
    let dip = prices[0];
    let profit = 0;

    for(let i = 1 ; i < prices.length ; i++){
        if(prices[i] - dip > profit){
            profit = prices[i] - dip;
        };
        if(prices[i] < dip){
            dip = prices[i];
        };
    };
    // easier to read with Math.max and Math.min
    // but this is easiser to understand basic train of thought

    console.log(profit);
    return profit;
};
maxProfit2(stock);