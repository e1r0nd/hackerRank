/**
 * Day 4: Classes
 * https://www.hackerrank.com/challenges/js10-class
 */
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(arr) {
        this.sides = [...arr];
    }
    
    perimeter() {
        return this.sides.reduce((acc, x) => acc + x, 0);
    }
}
