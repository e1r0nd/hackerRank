/**
 * Day 3: Arrays
 * https://www.hackerrank.com/challenges/js10-arrays
 */
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    const max = Math.max(...nums);
    
    return nums
            .filter(x => x < max)
            .sort((a, b) => b - a)[0];
}
