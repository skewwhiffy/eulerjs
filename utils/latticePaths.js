"use strict";

module.exports = function() {
    let self = this;

    let cache = {};

    let numberOfPaths = (x, y) => {
        if (x === 0 || y === 0) return 1;
        if (cache[x] && cache[x][y]) return cache[x][y];
        if (x > y) return numberOfPaths(y, x);
        if (!cache[x]) cache[x] = {};
        cache[x][y] = numberOfPaths(x - 1, y) + numberOfPaths(x, y - 1);
        return cache[x][y];
    }

    self.numberOfPaths = size => numberOfPaths(size, size);
}
