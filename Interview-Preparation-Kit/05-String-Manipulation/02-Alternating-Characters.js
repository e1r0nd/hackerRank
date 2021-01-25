// https://www.hackerrank.com/challenges/alternating-characters

function alternatingCharacters(s) {
    let current = s[0];
    let results = 0;
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === current) {
            results += 1;
        } else {
            current = s[i];
        }
    }
    
    return results;
}
