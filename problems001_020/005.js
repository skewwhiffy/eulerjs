"use strict";

/*

Smallest multiple
Problem 5
2520 is the smallest number that can be divided by each of the numbers from 1 to
10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the
numbers from 1 to 20?

 */

let expect = require("chai").expect;
let PrimeFactors = require("../utils/primeFactors");

describe("Problem 5", function() {
    let primeFactors = new PrimeFactors();

    let solution = upperLimit => {
        let factorsOfAnswer = {};
        for (let i = 2; i <= upperLimit; i++) {
            let factors = primeFactors.factorizeAsPowers(i);
            Object.keys(factors).forEach(k => {
                if (!factorsOfAnswer[k] || factorsOfAnswer[k] < factors[k]) {
                    factorsOfAnswer[k] = factors[k];
                }
            })
        }
        return Object.keys(factorsOfAnswer).map(k => Math.pow(k, factorsOfAnswer[k])).reduce((p, c) => p * c, 1);
    }

    it("Test data", () => {
        let testAnswer = solution(10);
        expect(testAnswer).to.equal(2520);
    })

    it("Solution: 232792560", () => {
        let answer = solution(20);
        expect(answer).to.equal(232792560);
    });
})
