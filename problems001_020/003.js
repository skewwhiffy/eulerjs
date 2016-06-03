"use strict";

/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

 */

var expect = require("chai").expect;
var PrimeFactors = require("../utils/primeFactors");

describe("Problem 3", function() {
    let solution = () => {
        let factorizor = new PrimeFactors();
        let factors = factorizor.factorize(600851475143);
        return factors[factors.length - 1];
    }

    it("Solution: 6857", () => {
        let answer = solution();
        expect(answer).to.equal(6857);
    });
})
