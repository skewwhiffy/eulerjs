"use strict";

/*

Sum square difference
Problem 6
The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural
numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred
natural numbers and the square of the sum.

 */

let expect = require("chai").expect;
let PrimeFactors = require("../utils/primeFactors");

describe("Problem 6", function() {
    let solution = upperLimit => {
        let naturals = [];
        for (let i = 1; i <= upperLimit; i++) {
            naturals.push(i);
        }
        let sumOfSquares = naturals.map(n => n * n).reduce((p, c) => p + c, 0);
        let squareOfSum = naturals.reduce((p, c) => p + c, 0);
        squareOfSum *= squareOfSum;
        return squareOfSum - sumOfSquares;
    }

    it("Test data", () => {
        let testAnswer = solution(10);
        expect(testAnswer).to.equal(2640);
    })

    it("Solution: 25164150", () => {
        let answer = solution(100);
        expect(answer).to.equal(25164150);
    });
})
