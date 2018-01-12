/**
 * Day 0: Weighted Mean
 * https://www.hackerrank.com/challenges/s10-weighted-mean/
 */
function processData(input) {
    const [N, elements, weights] = input.split`\n`.map(s => s.split` `.map(Number));
    const weightedSum = elements.reduce((acc, x, i) => x * weights[i] + acc, 0);
    const sum = weights.reduce((acc, x) => x + acc, 0);
    const weightedMean = (weightedSum / sum).toFixed(1);

    console.log(weightedMean);
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
