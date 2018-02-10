/**
 * Day 1: Quartiles
 * https://www.hackerrank.com/challenges/s10-quartiles/
 */
function processData(input) {
    const getMedian = (a, l = a.length) => l % 2 ? a[~~(l / 2)] : (a[~~(l/2)] + a[~~(l/2) - 1]) / 2;
    const [N, str] = input.split`\n`.map(String);
    const arr = str.split` `.map(Number).sort((a, b) => a - b);
    const [N1, N2] = N % 2 ? [~~(N/2) - 1, ~~(N/2)] : [~~(N/2) - 1, ~~(N/2) - 1];

    const q1 = getMedian(arr.filter((x, i) => i <= N1 ));
    const q2 = getMedian(arr);
    const q3 = getMedian(arr.filter((x, i) => i > N2 ));
    
    console.log(`${q1}\n${q2}\n${q3}`);
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
