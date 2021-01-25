// https://www.hackerrank.com/challenges/ctci-bubble-sort/

function countSwaps(a) {
    let swaps = 0

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j+1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]];
                swaps += 1;
            }
        }
    }
    
    console.log(`Array is sorted in ${swaps} swaps.
First Element: ${a[0]}
Last Element: ${a[a.length-1]}`);
}
