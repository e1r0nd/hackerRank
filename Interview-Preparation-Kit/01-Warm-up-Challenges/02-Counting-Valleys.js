// https://www.hackerrank.com/challenges/counting-valleys

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let valleys = 0;
    let currentHigh = 0;
    let goingIntoValley = false;
    
    for (let i = 0; i < steps; i++) {
        currentHigh += path[i] === 'U' ? 1 : -1;
        if (goingIntoValley === false && currentHigh < 0) {
            goingIntoValley = true;
        }
        if (goingIntoValley === true && currentHigh >= 0) {
            goingIntoValley = false;
            valleys += 1;
        }
    }
    
    return valleys;
}
