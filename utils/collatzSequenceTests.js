"use strict";

let expect = require("chai").expect;
let Collatz = require("./collatzSequence");

describe("Collatz sequence", () => {
    let collatz = new Collatz();

    it("correctly finds length of 13", () => {
        let length = collatz.length(13);
        expect(length).to.equal(10);
    })
})
