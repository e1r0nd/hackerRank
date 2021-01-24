// https://www.hackerrank.com/challenges/repeated-string

// Complete the repeatedString function below.
function repeatedString(s, n) {
    const times = Math.floor(n / s.length);
    const num = s.match(/a/g) ? s.match(/a/g).length : 0;
    const rest = n - s.length * times;
    let restStr = '';
    
    if (rest > 0) {
        restStr = s.slice(0, rest).match(/a/g);
    } else if (rest < 0) {
        restStr = s.slice(rest).match(/a/g);
    }
    const restNum = rest && restStr && restStr.length;

    return num * times + +restNum;
}
