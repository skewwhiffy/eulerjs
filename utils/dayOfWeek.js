"use strict";

module.exports = function() {
    let self = this;

    let numberOfDaysInMonth = (y, m) => {
        if (m === 9 || m === 4 || m === 6 || m === 11) return 30;
        if (m !== 2) return 31;
        if (y % 4 !== 0) return 28;
        if (y % 100 !== 0) return 29;
        if (y % 400 === 0) return 29;
        return 28;
    }

    self.day = (y, m, d) => {
        if (y === 1900 && m === 1 && d === 1) return 1;
        if (d > 7) return self.day(y, m, d - 7);
        if (d > 1) return (self.day(y, m, 1) + d - 1) % 7;
        if (m === 1) return (self.day(y - 1, 12, 31) + 1) % 7;
        return (self.day(y, m - 1, numberOfDaysInMonth(y, m - 1)) + 1) % 7;
    }
}
