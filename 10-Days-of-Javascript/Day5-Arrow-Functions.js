/**
 * Day 5: Arrow Functions
 * https://www.hackerrank.com/challenges/js10-arrows
 */
/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    return nums.map(x => x % 2 === 0 ? x * 2 : x * 3);
}
