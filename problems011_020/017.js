"use strict";

/*

Number letter counts
Problem 17
If the numbers 1 to 5 are written out in words: one, two, three, four, five,
then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in
words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and
forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20
letters. The use of "and" when writing out numbers is in compliance with
British usage.

 */

let expect = require("chai").expect;
let NumberToWords = require("../utils/numberToWords");

describe("Problem 17", function() {
    let numberToWords = new NumberToWords();

    let characterCount = word => {
        let characters = word.split("").filter(c => c >= "a" && c <= "z");
        return characters.length;
    }

    let solution = highestNumber => {
        let numbers = [];
        for(let i = 1; i <= highestNumber; i++) numbers.push(i);
        return numbers.map(numberToWords.toWords).map(characterCount).reduce((p, c) => p + c, 0);
    }

    it("character counter works for 342", () => {
        let words = numberToWords.toWords(342);
        let numberOfLetters = characterCount(words);
        expect(numberOfLetters).to.equal(23);
    })

    it("test case works", () => {
        let testResult = solution(5);
        expect(testResult).to.equal(19);
    });

    it("solution: " + solution(1000), () => {})
})
