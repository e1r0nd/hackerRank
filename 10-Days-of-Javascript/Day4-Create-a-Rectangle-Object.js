/**
 * Day 4: Create a Rectangle Object
 * https://www.hackerrank.com/challenges/js10-objects
 */
/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    return {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b
    }
}
