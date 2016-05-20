"use strict";

/*

Special Pythagorean triplet
Problem 9
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
 */

let expect = require("chai").expect;
let PythagoreanTriple = require("../utils/pythagoreanTriple");

describe("Problem 9", function() {
    let triple = new PythagoreanTriple();

    let solution = () => {
        for(let a = 1; a < 1000; a++) {
            for (let b = a; b < 1000; b++) {
                let c = triple.hypotenuse(a, b);
                if (!c) continue;
                if (a + b + c === 1000) return a*b*c;
            }
        }
    }

    it("Solution: " + solution(), () => {})
})
