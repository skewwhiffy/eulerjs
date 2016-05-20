"use strict";

/*

10001st prime
Problem 7
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that
the 6th prime is 13.

What is the 10 001st prime number?

 */

let expect = require("chai").expect;
let Prime = require("../utils/prime");

describe("Problem 7", function() {
    let prime = new Prime();

    let solution = number => prime.prime(number - 1);

    it("Test data", () => {
        let testAnswer = solution(6);
        expect(testAnswer).to.equal(13);
    })

    it("Solution: " + solution(10001), () => {})
})
