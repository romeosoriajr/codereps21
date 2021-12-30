function smallestRepunitDivByK (k) {
    if (!(k%2) || !(k%5)) return -1;
    let r = 0;
    for (let i=1; i <= k+1; ++i) {
        r = (r*10+1) % k;
        if (!r) return i;
    }
};


