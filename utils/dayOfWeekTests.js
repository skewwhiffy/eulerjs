"use strict";

let expect = require("chai").expect;
let DayOfWeek = require("./dayOfWeek");

describe.only("Day of week", () => {
    let dayOfWeek = new DayOfWeek();

    it("Works for Mon 1 Jan 1900", () => {
        let day = dayOfWeek.day(1900, 1, 1);
        expect(day).to.equal(1);
    })

    it("Works for Mon 8 Jan 1900", () => {
        let day = dayOfWeek.day(1900, 1, 8);
        expect(day).to.equal(1);
    })

    it("Works for Tue 16 Jan 1900", () => {
        let day = dayOfWeek.day(1900, 1, 16);
        expect(day).to.equal(2);
    })

    it("Works for Thur 1 Feb 1900", () => {
        let day = dayOfWeek.day(1900, 2, 1);
        expect(day).to.equal(4);
    })

    it("Works for Sun 9 Sep 1900", () => {
        let day = dayOfWeek.day(1900, 9, 9);
        expect(day).to.equal(0);
    })

    it("Works for Tue 1 Jan 1901", () => {
        let day = dayOfWeek.day(1901, 1, 1);
        expect(day).to.equal(2);
    })

    it("Works for Mon 9 Sep 1974", () => {
        let day = dayOfWeek.day(1974, 9, 9);
        expect(day).to.equal(1);
    })

    it("Works for Mon 23 May 2016", () => {
        let day = dayOfWeek.day(2016, 5, 23);
        expect(day).to.equal(1);
    })
})
