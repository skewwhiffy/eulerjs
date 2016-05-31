"use strict";

module.exports = function() {
    let self = this;

    self.at = (x, y) => {
        if (x === y && x >= 0) return (2 * x + 1) * (2 * x + 1);
        if (y > x && y >= -x) return self.at(x + 1, y) - 1;
        if (y >= x && y <= -x) return self.at(x, y + 1) - 1;
        if (y <= x && y > -x) return self.at(x, y - 1) - 1;
        if (y <= x && y <= -x) return self.at(x - 1, y) - 1;
    }
}
