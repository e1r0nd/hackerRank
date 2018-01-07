/**
 * Day 1: Functions
 * https://www.hackerrank.com/challenges/js10-function
 */

/*
 * Create the function factorial here
 */
const factorial = n => {
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
