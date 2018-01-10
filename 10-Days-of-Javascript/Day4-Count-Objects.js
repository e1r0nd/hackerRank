/**
 * Day 4: Count Objects
 * https://www.hackerrank.com/challenges/js10-count-objects
 */
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let result = 0;
    
    objects.forEach(obj => obj.x === obj.y && result++);
    
    return result;
}
