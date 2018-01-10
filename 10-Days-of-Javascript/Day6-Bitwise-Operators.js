/**
 * Day 6: Bitwise Operators
 * https://www.hackerrank.com/challenges/js10-bitwise
 */
/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    let max = new Set();

    for (let i = 1; i <= n; i++) {
        for (let j = i + 1; j <= n; j++) {
            if ((i & j) && (i & j) < k) {
                max.add(i & j);
            }
        }
    }

    return [...max].pop() || 0;
}
