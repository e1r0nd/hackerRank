// https://www.hackerrank.com/challenges/ctci-making-anagrams

function makeAnagram(a, b) {
    let result = 0;
    // Create a hashtable
    const aMap = {};
    for (let i = 0; i < a.length; i++) {
        const c = aMap[a[i]] || 0;
        aMap[a[i]] = c + 1;
    }

    // Calculate "b" diff
    for (let i = 0; i < b.length; i++) {
        const c = aMap[b[i]] || 0;
        if (c) {
            aMap[b[i]] -= 1;
        } else {
            result += 1;
        }
    }
    // Calculate "a" diff
    result += Object.values(aMap).reduce((a, c) => a+c, 0);
    
    return result;
}