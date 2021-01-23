'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    let result = 0;
    let i = 0;
    
    while (i < ar.length) {
        // 1 Plain solution
        /*
        const currentValue = ar[i];
        const nextValue = ar[i + 1];
        
        if (currentValue === nextValue) {
            result += 1;
            i += 2;
        } else {
            i += 1;
        }
        */
        // 2 Optimized solution
        [result, i] = ar[i] === ar[i + 1]
            ? [result + 1, i + 2]
            : [result, i + 1];
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
