"use strict";

module.exports = function() {
    let self = this;

    self.factorsOf = source => {
        let low = [];
        let high = [];
        for (let i = 1; i * i <= source; i++) {
            if (source % i === 0) {
                low.push(i);
                let highValue = source/i;
                if (highValue != i) high.push(source/i);
            }
        }
        for (let i = high.length - 1; i >= 0; i--) {
            low.push(high[i]);
        }
        return low;
    }

    self.sumOfProperDivisors = source => {
        return self.factorsOf(source).filter(f => f < source).reduce((c, p) => c + p, 0);
    }
}
