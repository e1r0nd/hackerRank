/**
 * Day 2: Conditional Statements: Switch
 * https://www.hackerrank.com/challenges/js10-switch
 */
function getLetter(s) {
    let letter;
    // Write your code here
    switch(true) {
        case (["a", "e", "i", "o", "u"].includes(s.charAt(0))):
            letter = "A";
            break;
        case (["b", "c", "d", "f", "g"].includes(s.charAt(0))):
            letter = "B";
            break;
        case (["h", "j", "k", "l", "m"].includes(s.charAt(0))):
            letter = "C";
            break;
        default:
            letter = "D";
    }
    return letter;
}
