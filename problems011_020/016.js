"use strict";

/*

Power digit sum
Problem 16
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

 */

let expect = require("chai").expect;
let bigInt = require("big-integer");

describe("Problem 16", function() {
    let solution = power => {
        let exponentOfTwo = bigInt(2).pow(power);
        let digits = exponentOfTwo.toString().split("").map(x => parseInt(x));
        return digits.reduce((p, c) => p + c, 0);
    }

    it("test case works", () => {
        let testResult = solution(15);
        expect(testResult).to.equal(26);
    });

    it("solution: " + solution(1000), () => {})
})
