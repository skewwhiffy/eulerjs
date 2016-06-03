"use strict";

/*

Longest Collatz sequence
Problem 14
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

 */

let expect = require("chai").expect;
let Collatz = require("../utils/collatzSequence");

describe("Problem 14", function() {
    let collatz = new Collatz();

    let solution = () => {
        let longestSoFar = 0;
        let startOfLongest = 0;
        for (let i = 1; i < 1000000; i++) {
            let length = collatz.length(i);
            if (length > longestSoFar) {
                longestSoFar = length;
                startOfLongest = i;
            }
        }
        return startOfLongest;
    }

    it("solution: 837799", function() {
        this.timeout(5000);
        let answer = solution();
        expect(answer).to.equal(837799);
    });
})
