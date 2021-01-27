function flippingBits(N) {
    const bits = (N).toString(2).padStart(32, '0');
    const flipped = bits.split('').map(
        x => x === '1' ? '0' : '1'
    ).join('');

    return parseInt(flipped, 2);
}
