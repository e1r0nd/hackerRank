/**
 * Day 1: Interquartile Range
 * https://www.hackerrank.com/challenges/s10-interquartile-range/
 */
function processData(input) {
    const [, EL, FR] = input.split`\n`.map(String);
    const fr = FR.split` `.map(Number);
    const arr = EL.split` `.map((x, i) => Array(fr[i]).fill(x)).reduce((a, n) => a.concat(n), []).map(Number).sort((a, b) => a - b);
    const getMedian = (a, l = a.length) => l % 2 ? a[~~(l / 2)] : (a[~~(l/2)] + a[~~(l/2) - 1]) / 2;
    
    const [N1, N2] = arr.length % 2 ? [~~(arr.length/2) - 1, ~~(arr.length/2)] : [~~(arr.length/2) - 1, ~~(arr.length/2) - 1];

    const q1 = getMedian(arr.filter((x, i) => i <= N1 ));
    const q3 = getMedian(arr.filter((x, i) => i > N2 ));

    console.log(`${(q3 - q1).toFixed(1)}`);
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
