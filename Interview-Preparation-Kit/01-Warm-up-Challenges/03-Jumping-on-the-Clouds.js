// https://www.hackerrank.com/challenges/jumping-on-the-clouds

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
    let i = 0;
    let steps = 0;

    while (i < c.length) {
        i += c[i + 2] === 1 ? 1 : 2;
        i <= c.length && steps ++;
    }
    
    return steps;
}
