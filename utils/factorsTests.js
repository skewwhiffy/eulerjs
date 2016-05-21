"use strict";

var expect = require("chai").expect;
var Factors = require("./factors");

describe("Factors", () => {
    let factors = new Factors();

    it("correctly finds factors of 1", () => {
        let factorization = factors.factorsOf(1);
        expect(factorization).to.eql([1]);
    })

    it("correctly finds factors of 25", () => {
        let factorization = factors.factorsOf(25);
        expect(factorization).to.eql([1, 5, 25]);
    })

    it("correctly finds factors of 28", () => {
        let factorization = factors.factorsOf(28);
        expect(factorization).to.eql([1,2,4,7,14,28]);
    })
})
