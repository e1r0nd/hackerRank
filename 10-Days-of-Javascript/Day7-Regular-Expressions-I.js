/**
 * Day 7: Regular Expressions I
 * https://www.hackerrank.com/challenges/js10-regexp-1
 */
function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeoui]).*\1$/;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
