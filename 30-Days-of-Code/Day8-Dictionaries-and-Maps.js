/**
 * Day 8: Dictionaries and Maps
 * https://www.hackerrank.com/challenges/30-dictionaries-and-maps
 */
function processData(input) {
    const phoneBook = {};
    
    input.split`\n`.forEach((x, i) => {
        if (0 === i) return;
        
        const [name, number] = x.split` `.map(String);
        
        if (number) {
            phoneBook[name] = number;
        } else {
            console.log(phoneBook[name] ? `${name}=${phoneBook[name]}` : 'Not found');
        }
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
