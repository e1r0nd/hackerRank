// https://www.hackerrank.com/challenges/mark-and-toys

function maximumToys(prices, k) {
    let result = 0;
    
    prices.sort((a, b) => a - b);
    for (let i = 0; i < prices.length; i++) {
        if (k - prices[i] >= 0) {
            k -= prices[i];
            result += 1;
        }
    }
    
    return result;
}
