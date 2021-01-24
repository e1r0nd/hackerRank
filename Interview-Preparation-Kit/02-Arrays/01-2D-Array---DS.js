// https://www.hackerrank.com/challenges/2d-array

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    const sum = [];

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const s = arr[i][j] + arr[i][j+1] + arr[i][j+2] +
                                + arr[i+1][j+1] +
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
            sum.push(s);
        }
    }

    return sum.sort((a,b) => b - a)[0];
}
