"use strict";

/*

Counting Sundays
Problem 19
You are given the following information, but you may prefer to do some research
for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century
unless it is divisible by 400.
How many Sundays fell on the first of the month during the twentieth century
(1 Jan 1901 to 31 Dec 2000)?

 */

let expect = require("chai").expect;
let DayOfWeek = require("../utils/dayOfWeek");

describe("Problem 19", function() {
    let dayOfWeek = new DayOfWeek();

    let solution = () => {
        let count = 0;
        for (let y = 1901; y <= 2000; y++) {
            for (let m = 1; m <= 12; m++) {
                let day = dayOfWeek.day(y, m, 1);
                if (day === 0) count++;
            }
        }
        return count;
    }

    it("solution: " + solution(), () => {});
})
