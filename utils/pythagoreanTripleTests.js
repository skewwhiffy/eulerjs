"use strict";

let expect = require("chai").expect;
let PythagoreanTriple = require("./pythagoreanTriple");

describe("Calculate hypotenuse", () => {
    let triple = new PythagoreanTriple();

    it("works for Pythagorean triple", () => {
        let hyp = triple.hypotenuse(3, 4);
        expect(hyp).to.equal(5);
    })

    it("is undefined for non Pythagorean triple", () => {
        let hyp = triple.hypotenuse(3, 5);

        expect(hyp).to.not.be.ok;
    })
})
