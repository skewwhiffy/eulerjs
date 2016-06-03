"use strict";

/*

Lattice paths
Problem 15
Starting in the top left corner of a 2×2 grid, and only being able to move to
the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

 */

let expect = require("chai").expect;
let Lattice = require("../utils/latticePaths");

describe("Problem 15", function() {
    let lattice = new Lattice();

    let solution = start => {
        return lattice.numberOfPaths(start);
    }

    it("test case works", () => {
        let testResult = solution(2);
        expect(testResult).to.equal(6);
    });

    it("solution: 137846528820", () => {
        let answer = solution(20);
        expect(answer).to.equal(137846528820);
    });
})
