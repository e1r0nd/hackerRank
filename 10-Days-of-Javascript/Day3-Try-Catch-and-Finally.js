/**
 * Day 3: Try, Catch, and Finally
 * https://www.hackerrank.com/challenges/js10-try-catch-and-finally
 */
/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        console.log(s.split``.reverse().join``);
    } catch (e) {
        console.log(`${e.message}\n${s}`);
    }
}
