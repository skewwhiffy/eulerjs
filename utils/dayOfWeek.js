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

    let numberOfDaysInYear = y => {
        if (y % 4 !== 0) return 365;
        if (y % 100 !== 0) return 366;
        if (y % 400 === 0) return 366;
        return 365;
    }

    self.day = (y, m, d) => {
        let day = 1;
        let year = 1900;
        let month = 1;
        let date = 1;
        if (year === y && month === m && date === d) return day;
        while (year < y) {
            day = (day + numberOfDaysInYear(year)) % 7;
            year ++;
        }
        while (month < m) {
            day = (day + numberOfDaysInMonth(year, month)) % 7;
            month ++;
        }
        while (date < d) {
            day = (day + 1) % 7;
            date++;
        }
        return day;
    }
}
