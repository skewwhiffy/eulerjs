"use strict";

/*

Amicable numbers
Problem 21
Let d(n) be defined as the sum of proper divisors of n (numbers less than n
which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and
each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55
and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and
142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

 */

let expect = require("chai").expect;
let Factors = require("../utils/factors");

describe("Problem 21", function() {
    let factors = new Factors();

    let sumCache = {};

    let sumOfFactors = source => {
        if (sumCache[source]) return sumCache[source];
        let factorization = factors.factorsOf(source);
        sumCache[source] = factorization.reduce((c, p) => c + p, 0) - source;
        return sumCache[source];
    }

    let solution = source => {
        let result = 0;
        for (let i = 1; i < 10000; i++) {
            let d = sumOfFactors(i);
            if (d === i) continue;
            let dd = sumOfFactors(d);
            if (dd === i) result += i;
        }
        return result;
    }

    it("d(220) = 284", () => {
        let result = sumOfFactors(220);
        expect(result).to.equal(284);
    })

    it("d(284) = 220", () => {
        let result = sumOfFactors(284);
        expect(result).to.equal(220);
    })

    it("solution: " + solution(), () => {});
})
