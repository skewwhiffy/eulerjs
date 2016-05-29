"use strict";

module.exports = function() {
    let self = this;

    self.recurringDigits = (top, bottom) => {
        let digitsSoFar = [];
        let remaindersSoFar = [];

        while (true) {
            let remainder = top % bottom;
            let ratio = Math.floor(top/bottom);
            if (remaindersSoFar.indexOf(remainder) > -1) {
                return remaindersSoFar.length - remaindersSoFar.indexOf(remainder);
            };
            digitsSoFar.push(ratio);
            remaindersSoFar.push(remainder);
            top = remainder * 10;
            if (remainder === 0) return 0;
        }
    }
}
