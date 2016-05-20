"use strict";

module.exports = function() {
    let self = this;

    self.seed = [false, false];

    self.reseed = () => {
        let newSeed = self.seed.slice();
        for (let i = 0; i < self.seed.length; i++) {
            newSeed.push(true);
        }
        for (let i = 0; i < self.seed.length; i++) {
            if (!self.seed[i]) continue;
            let maxMultiple = newSeed.length / i;
            for (let j = 2; j < maxMultiple; j++) {
                newSeed[i * j] = false;
            }
        }
        self.seed = newSeed;
        return newSeed;
    }
}
