"use strict";

let Prime = require("./prime");

module.exports = function() {
    let self = this;
    let prime = new Prime();

    self.factorize = source => {
        let factors = [];
        let count = 0;
        while (source > 1) {
            let candidateFactor = prime.prime(count);
            if (source % candidateFactor !== 0) {
                count++;
            } else {
                factors.push(candidateFactor);
                source /= candidateFactor;
            }
        }
        return factors;
    }
}
