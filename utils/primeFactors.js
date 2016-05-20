"use strict";

let Prime = require("./prime");

module.exports = function() {
    let self = this;
    let prime = new Prime();

    let factorizeInternal = (source, addFactor) => {
        let count = 0;
        while (source > 1) {
            let candidateFactor = prime.prime(count);
            if (source % candidateFactor !== 0) {
                count++;
            } else {
                addFactor(candidateFactor);
                source /= candidateFactor;
            }
        }
    }

    self.factorize = source => {
        let factors = [];
        factorizeInternal(source, f => factors.push(f));
        return factors;
    }

    self.factorizeAsPowers = source => {
        let factors = {};
        factorizeInternal(source, f => {
            if (!factors[f]) factors[f] = 0;
            factors[f]++;
        })
        return factors;
    }
}
