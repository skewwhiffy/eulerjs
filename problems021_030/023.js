"use strict";

/*

Non-abundant sums
Problem 23
A perfect number is a number for which the sum of its proper divisors is exactly
equal to the number. For example, the sum of the proper divisors of 28 would be
1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n
and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest
number that can be written as the sum of two abundant numbers is 24. By
mathematical analysis, it can be shown that all integers greater than 28123 can
be written as the sum of two abundant numbers. However, this upper limit cannot
be reduced any further by analysis even though it is known that the greatest
number that cannot be expressed as the sum of two abundant numbers is less than
this limit.

Find the sum of all the positive integers which cannot be written as the sum of
two abundant numbers.

 */

let expect = require("chai").expect;
let Factors = require("../utils/factors");

describe("Problem 23", function() {
    let factors = new Factors;
    let abundant;

    let isAbundant = source => factors.sumOfProperDivisors(source) > source;

    before(() => {
        abundant = [];
        for(let i = 2; i < 28123; i++) {
            if (isAbundant(i)) abundant.push(i);
        }
    })

    it("12 is abundant", () => {
        expect(isAbundant(12)).to.equal(true);
    })

    it("12 is the smallest abundant number", () => {
        expect(abundant[0]).to.equal(12);
    })

    it("solution: 4179871", function() {
        this.timeout(10000);
        let canBeWrittenAsSumOfTwoAbundantNumbers = new Set();
        for (let i = 0; i < abundant.length; i++) {
            for (let j = i; j < abundant.length; j++) {
                let sum = abundant[i] + abundant[j];
                if (sum <= 28123) canBeWrittenAsSumOfTwoAbundantNumbers.add(sum);
            }
        }
        let cannotBeWritten = new Set();
        for (let i = 0; i <= 28123; i++) {
            cannotBeWritten.add(i);
        }
        let result = 0;
        canBeWrittenAsSumOfTwoAbundantNumbers
            .forEach(v => cannotBeWritten.delete(v));
        cannotBeWritten.forEach(v => result += v);

        expect(result).to.equal(4179871);
    });
})
