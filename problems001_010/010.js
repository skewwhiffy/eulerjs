"use strict";

/*

Summation of primes
Problem 10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

 */

let expect = require("chai").expect;
let Prime = require("../utils/prime");

describe("Problem 10", () => {
    let prime = new Prime();

    let solution = upperLimit => {
        let sum = 0;
        let count = 0;
        while(true) {
            let current = prime.prime(count);
            if (current >= upperLimit) return sum;
            sum += current;
            count++;
        }
    }

    it("Test data", () => {
        let testResult = solution(10);
        expect(testResult).to.equal(17);
    })

    it("Solution: 142913828922", () => {
        let answer = solution(2000000);
        expect(answer).to.equal(142913828922);
    });
})
