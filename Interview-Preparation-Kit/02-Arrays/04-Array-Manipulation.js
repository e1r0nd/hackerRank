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
function arrayManipulation(n, queries) {
    let row = Array(n).fill(0);
    
    for (let j = 0; j < queries.length; j++) {
        // Loop through Queries
        const [a, b, k] = queries[j];
        // Mark boundaries
        row[a-1] += k;
        row[b] -= k;
    }
    
    let max = 0;
    let cumulativeMax = 0; 
    
    // Use boundaries as a prefix
    for(let i = 0; i < n; i++){
        cumulativeMax += row[i];
        max = Math.max(max, cumulativeMax);
    }
    
    return max;
}
