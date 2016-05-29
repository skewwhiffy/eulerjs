"use strict";

let bigInt = require("big-integer");

module.exports = function() {
    let self = this;
    let cache = [1, 1];

    self.sequence = i => {
        while(i >= cache.length) {
            cache.push(cache[cache.length - 1] + cache[cache.length - 2]);
        }
        return cache[i];
    }

    self.iterate = current => {
        if (!current) {
            return {
                index: 2,
                previous: 0,
                last: 1,
                current: 1
            }
        }

        return {
            index: current.index + 1,
            previous: current.last,
            last: current.current,
            current: bigInt(current.last).plus(current.current)
        };
    }
}
