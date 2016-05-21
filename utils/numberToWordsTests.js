"use strict";

let expect = require("chai").expect;
let NumberToWords = require("./numberToWords");

describe("Number to words", () => {
    let numberToWords = new NumberToWords();

    it("works for 1", () => {
        let words = numberToWords.toWords(1);
        expect(words).to.equal("one");
    })

    it("works for 23", () => {
        let words = numberToWords.toWords(23);
        expect(words).to.equal("twenty-three");
    })

    it("works for 342", () => {
        let words = numberToWords.toWords(342);
        expect(words).to.equal("three hundred and forty-two");
    })

    it("works for 1000", () => {
        let words = numberToWords.toWords(1000);
        expect(words).to.equal("one thousand");
    })
})
