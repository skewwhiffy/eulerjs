"use strict";

let expect = require("chai").expect;
let LongDivision = require("./longDivision");

describe("Long division", () => {
    let longDivision = new LongDivision();

    it("correctly identifies non-recurring decimal", () => {
        let result = longDivision.recurringDigits(1, 8);
        expect(result).to.equal(0);
    })

    it("correctly identifies single-digit recurring decimal", () => {
        let result = longDivision.recurringDigits(1, 3);
        expect(result).to.equal(1);
    })

    it("correctly identifies multiple-digit recurring decimal", () => {
        let result = longDivision.recurringDigits(1, 983);
        expect(result).to.equal(982);
    })
})
