// https://www.hackerrank.com/challenges/ctci-array-left-rotation

// Complete the rotLeft function below.
function rotLeft(a, d) {
    const shift = a.length / d;
    
    if (shift === 1) {
        return a;
    } else if (shift > 1) {
        return [...a.slice(d), ...a.slice(0, d)]
    } else {
        const times = Math.floor(d / a.length);
        const lastShift = d - a.length * times - 1;
        return [...a.slice(lastShift), ...a.slice(0, lastShift)];
    }
}
