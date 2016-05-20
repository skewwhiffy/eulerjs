"use strict";

module.exports = function() {
    let self = this;

    self.hypotenuse = (a, b) => {
        let hyp = Math.sqrt([a, b].map(x => x * x).reduce((p, c) => p + c, 0));
        if (hyp === parseInt(hyp, 10)) return hyp;
    }
}
