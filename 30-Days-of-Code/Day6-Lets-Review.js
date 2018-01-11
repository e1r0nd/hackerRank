/**
 * Day 6: Let's Review
 * https://www.hackerrank.com/challenges/30-review-loop
 */
function processData(input) {
    const [N, ...words] = input.split`\n`.map(String);
    
    words.forEach(w => {
        const evens = w.split``.filter((c, i) => i % 2 === 0).join``;
        const odds = w.split``.filter((c, i) => i % 2 !== 0).join``;
        
        console.log(`${evens} ${odds}`);
    });
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
