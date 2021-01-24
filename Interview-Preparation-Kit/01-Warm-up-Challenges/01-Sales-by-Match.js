// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort((a, b) => a - b);
    let result = 0;
    let i = 0;
    
    while (i < ar.length) {
        // 1 Plain solution
        /*
        const currentValue = ar[i];
        const nextValue = ar[i + 1];
        
        if (currentValue === nextValue) {
            result += 1;
            i += 2;
        } else {
            i += 1;
        }
        */
        // 2 Optimized solution
        [result, i] = ar[i] === ar[i + 1]
            ? [result + 1, i + 2]
            : [result, i + 1];
    }
    
    return result;
}
