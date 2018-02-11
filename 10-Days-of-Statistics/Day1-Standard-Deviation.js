/**
 * Day 1: Standard Deviation
 * https://www.hackerrank.com/challenges/s10-standard-deviation/
 */
function processData(input) {
    const [N, EL] = input.split`\n`.map(String);
    const arr = EL.split` `.map(Number);
    const mean = arr => arr.reduce((a, n) => a + n, 0) / arr.length;
    const sigma = (arr, m) => Math.sqrt(arr.map(x => Math.pow((x - m), 2)).reduce((a, n) => a + n, 0) / arr.length);
    
    console.log(`${sigma(arr, mean(arr)).toFixed(1)}`);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
