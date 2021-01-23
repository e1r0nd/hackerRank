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

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const times = Math.floor(n / s.length);
    const num = s.match(/a/g) ? s.match(/a/g).length : 0;
    const rest = n - s.length * times;
    let restStr = '';
    
    if (rest > 0) {
        restStr = s.slice(0, rest).match(/a/g);
    } else if (rest < 0) {
        restStr = s.slice(rest).match(/a/g);
    }
    const restNum = rest && restStr && restStr.length;

    return num * times + +restNum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine(), 10);

    let result = repeatedString(s, n);

    ws.write(result + "\n");

    ws.end();
}
