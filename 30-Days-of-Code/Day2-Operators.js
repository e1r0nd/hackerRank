/**
 * Day 2: Operators
 * https://www.hackerrank.com/challenges/30-operators
 */
'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
	_input = _input.split(new RegExp('[\n ]+'));
	main(+(_input[0]), +(_input[1]), +(_input[2]));    
});

function main(mealCost, tipPercent, taxPercent) {
    // Write your code here
    const tip = mealCost * tipPercent / 100;
    const tax = mealCost * taxPercent / 100;
    const totalCost = Math.round(mealCost + tip + tax);
    // Use console.log() to print to stdout
    console.log(`The total meal cost is ${totalCost} dollars.`);
}