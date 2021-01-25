// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array

function minimumAbsoluteDifference(arr) {
    arr.sort((a, b) => a - b);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 1; i++) {
        if (Math.abs(arr[i] - arr[i+1]) < min) {
            min = Math.abs(arr[i] - arr[i+1]);
            if (min === 0) {
                return 0;
            }
        }
    }
    return min;
}