"use strict";

var expect = require("chai").expect;
var PrimeFactors = require("./primeFactors");

describe("Factorizing", () => {
    let factors = new PrimeFactors();
    describe("to array", () => {
        it("factorizes prime to itself", () => {
            let factorization = factors.factorize(13);
            expect(factorization).to.eql([13]);
        })

        it("factorizes composite to prime factors", () => {
            let factorization = factors.factorize(72);
            expect(factorization).to.eql([2,2,2,3,3]);
        })
    })

    describe("to powers", () => {
        it("factorizes prime to itself", () => {
            let factorization = factors.factorizeAsPowers(13);
            expect(factorization).to.eql({13: 1});
        })

        it("factorizes composite to prime factors", () => {
            let factorization = factors.factorizeAsPowers(72);
            expect(factorization).to.eql({2:3, 3:2});
        })
    })
})
