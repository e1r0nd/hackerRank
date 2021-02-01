// https://www.hackerrank.com/challenges/count-triplets-1

// 1 Plain solution. Works for small arrays only (5/13 cases)
function countTriplets(arr, r) {
    let triples = 0;
    const pairs = [];
    
    // 1. Find and collect a fist pair of a triple
    for (let i = 0; i < arr.length-2; i++) {
        for (let j = i+1; j < arr.length-1; j++) {
            if (arr[i] * r === arr[j]) {
                pairs.push({i, j});
            }
        }
    }
    // 2. Find all occurrence of last element in the triple
    pairs.forEach(pair => {
        const {i, j} = pair;

        for (let k = j+1; k < arr.length; k++) {
            if (arr[j] * r === arr[k]) {
                triples += 1;
            }
        }    
    });
    
    return triples;
}

// 2 Optimized solution
function countTriplets(arr, r) {
    let triples = 0;
    const map = {};
    const mapPairs = {};
    
    // Loop over an array in the reverse order
    for (let i of arr.reverse()) {
        // look for a multiplier of the current value
        const multiplier = i * r;
        // if it appeared twice...
        if (mapPairs[multiplier]) {
            // ...then count how many times increase the result
            triples += mapPairs[multiplier];
        }
        // if it appeared once then...
        if (map[multiplier]) {
            // ...increase the number of pairs by this value
            mapPairs[i] = (mapPairs[i] || 0) + map[multiplier];
        }
        // and store the current value for future calculus
        map[i] = (map[i] || 0) + 1
    }
    
    return triples;
}
