"use strict";

/*

Factorial digit sum
Problem 20
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

 */

let expect = require("chai").expect;
let bigInt = require("big-integer");

describe("Problem 20", function() {

    let solution = source => {
        let factorial = bigInt(1);
        for(let i = 1; i <= source; i++) factorial = factorial.times(i);
        return factorial.toString().split("").map(x => parseInt(x)).reduce((p, c) => p + c, 0);
    }

    it("test data works", () => {
        let result = solution(10);
        expect(result).to.equal(27);
    })

    it("solution: 648", () => {
        let answer = solution(100);
        expect(answer).to.equal(648);
    });
})
