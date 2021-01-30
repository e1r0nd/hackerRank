// https://www.hackerrank.com/challenges/sherlock-and-anagrams

// 1 Plain solution. Works for small arrays strings.
function sherlockAndAnagrams(s) {
    let pairs = 0;
    // 1. iterate over the length of the original string
    for (let i = 0; i < s.length; i++) {
        for (let j = 1; j < s.length - i; j++) {
            // create an anagram from the initial word
            const word = s.slice(i, i+j).split``.sort().join``;
            
    // 2. compare the initial word with the rest of the string
            for (let k = i+1; k <= s.length - word.length; k++) {
                // create an anagram from the compared word
                const comparedWord = s.slice(k, k+word.length).split``.sort().join``;
                // compare both
                if (word === comparedWord) {
                    pairs += 1;
                }
            }
        }
    }
    
    return pairs;
}

// 2 Optimized solution
function sherlockAndAnagrams(s) {
    let words = []; // a list of possible words
    let pairs  = 0;
    
    // 1. create the list of all possible words
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j < s.length + 1; j++) {
            // create an anagram from the initial word
            words.push(s.slice(i, j).split``.sort().join``);
        }
    }
  
    // 2. find pairs in the list
    for(let i = 0; i < words.length-1; i++) {
        // take one word and
        for(let j = i + 1; j < words.length; j++) {
            // compare with all other words in the list
            if (words[i] === words[j]) {
                pairs += 1;
            }
        }
    }
    
    return pairs;
}