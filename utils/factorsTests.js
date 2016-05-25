"use strict";

var expect = require("chai").expect;
var Factors = require("./factors");

describe("Factors", () => {
    let factors = new Factors();

    it("finds factors of 1", () => {
        let factorization = factors.factorsOf(1);
        expect(factorization).to.eql([1]);
    })

    it("finds factors of 25", () => {
        let factorization = factors.factorsOf(25);
        expect(factorization).to.eql([1, 5, 25]);
    })

    it("finds factors of 28", () => {
        let factorization = factors.factorsOf(28);
        expect(factorization).to.eql([1,2,4,7,14,28]);
    })

    it("calculates the sum of proper divisors of 28, a magic number", () => {
        expect(factors.sumOfProperDivisors(28)).to.equal(28);
    })
})
