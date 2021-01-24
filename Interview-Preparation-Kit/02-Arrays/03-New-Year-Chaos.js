// https://www.hackerrank.com/challenges/new-year-chaos

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let bribes = 0;
    let position = q.length;
    
    while (position > 0) {
        let i = position - 1;
        if (q[i] - position > 2) {
            position = 0;
            bribes = 'Too chaotic';
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes += 1;
            }
        }
        position -= 1;
    }
    
    console.log(bribes);
}
