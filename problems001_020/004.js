"use strict";

/*

A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

 */

let expect = require("chai").expect;
let Palindrome = require("../utils/palindrome");

describe("Problem 4", function() {
    let palindrome = new Palindrome();

    let solution = digits => {
        let upperLimit = Math.pow(10, digits) - 1;
        let lowerLimit = Math.pow(10, digits - 1);
        let largestSoFar = 0;
        for (let left = upperLimit; left >= lowerLimit; left--) {
            for (let right = upperLimit; right >= lowerLimit; right--) {
                let product = left * right;
                if (product < largestSoFar) break;
                if (palindrome.isPalindrome(product)) largestSoFar = product;
            }
        }
        return largestSoFar;
    }

    it("Test data", () => {
        let testAnswer = solution(2);
        expect(testAnswer).to.equal(9009);
    })

    it("Solution: " + solution(3), () => {})
})
