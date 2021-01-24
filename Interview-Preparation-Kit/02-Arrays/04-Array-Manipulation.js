// https://www.hackerrank.com/challenges/crush

// 1 Plain solution. Works for small arrays only.
function arrayManipulation(n, queries) {
    let max = 0;
    let row = Array(n + 1).fill(0);
    
    for (let j = 0; j < queries.length; j++) {
        const [a, b, k] = queries[j];
        
        for (let i = a - 1; i < b; i++) {
            row[i] += k;
            max = Math.max(max, row[i]);
        }
    }
    
    return max;
}

// 2 Optimized solution