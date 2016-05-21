"use strict";

var expect = require("chai").expect;
var Lattice = require("./latticePaths");

describe("Lattice paths", () => {
    let lattice = new Lattice();

    it("works for 2x2", () => {
        let result = lattice.numberOfPaths(2);
        expect(result).to.equal(6);
    });

    it("works for large problem", done => {
        let result = lattice.numberOfPaths(20);
        done();
    })
})
