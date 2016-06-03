"use strict";

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get
3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
 */

var expect = require("chai").expect;

describe.only("Problem 1", function() {
    let relevantSum = exclusiveUpperLimit => {
        let numbers = [];
        for (let i = 1; i < exclusiveUpperLimit; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                numbers.push(i);
            }
        }
        return numbers.reduce((p, c) => p + c, 0);
    }

    it("Works for test data", () => {
        let sum = relevantSum(10);
        expect(sum).to.equal(23);
    })

    it("Solution: 233168", () => {
        expect(relevantSum(1000)).to.equal(233168);
    });
});
