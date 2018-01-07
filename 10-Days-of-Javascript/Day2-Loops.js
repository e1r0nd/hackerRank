/**
 * Day 2: Loops
 * https://www.hackerrank.com/challenges/js10-loops
 */
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let consonants = '';
    
    s.split``.forEach((x) => {
        ["a", "e", "o", "u", "i"].includes(x)
            ? console.log(x)
            : consonants += `${x}\n`;
    });
    console.log(consonants);
}
