"use strict";

module.exports = function() {
    let self = this;
    let cache = [1, 2];

    self.sequence = i => {
        if (i <= cache.length) return cache[i - 1];
        if (i === cache.length + 1) {
            cache.push(cache[cache.length - 1] + cache[cache.length - 2]);
            return cache[cache.length - 1];
        }
    }
}
