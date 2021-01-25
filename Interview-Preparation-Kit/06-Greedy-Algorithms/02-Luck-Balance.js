function luckBalance(k, contests) {
    const important = [];
    let max = 0;
    
    contests.forEach(item => item[1]
        ? important.push(item[0])
        : max += item[0]);
    important.sort((a, b) => b - a);
    
    const positive = important.slice(0,k).reduce((a, c) => a+c, 0);
    const negative = important.slice(k).reduce((a, c) => a+c, 0);

    return max + positive - negative;  
}