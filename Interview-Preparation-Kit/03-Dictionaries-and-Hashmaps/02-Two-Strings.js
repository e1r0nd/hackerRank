// https://www.hackerrank.com/challenges/two-strings

function twoStrings(s1, s2) {
    for (let i = 0; i < s1.length; i++) {
        if (s2.includes(s1[i])) {
            return "YES";
        }
    }
    return "NO";
}
