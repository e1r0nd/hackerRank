// https://www.hackerrank.com/challenges/ctci-ransom-note

// 1 Plain Solution
function checkMagazine(magazine, note) {
    if (note.length > magazine.length) {
        console.log("No");
        return;
    }
    
    let result = "Yes";
    
    // Create a hashmap
    const wordsMap = magazine.reduce((acc, word) => {
        const prev = acc[word] || 0;
        return {...acc, [word]: prev+1};
    }, {});
    
    let i = 0;
    // Review note's words, whether the amount
    // of these words is enough for a note
    while (i < note.length) {
        const word = note[i];
        const numberOfWords = wordsMap[word] || 0;
        if (numberOfWords) {
            wordsMap[word] -= 1;
            i += 1;
        } else {
            result = "No";
            i = Number.MAX_SAFE_INTEGER;
        }
    }
    
    console.log(result);
}

// 2 Optimized solution
function checkMagazine(magazine, note) {
    if (note.length > magazine.length) {
        console.log("No");
        return;
    }
    
    // Create a hashmap
    const wordsMap = {};
    magazine.forEach(word => {
        const prev = wordsMap[word] || 0;
        wordsMap[word] = prev+1;
    });
    
    // Review note's words, whether the amount
    // of these words is enough for a note
    for (let word of note) {
        const numberOfWords = wordsMap[word] || 0;
        if (numberOfWords) {
            wordsMap[word] -= 1;
        } else {
            console.log("No");
            return;
        }
    }
    
    console.log("Yes");
}