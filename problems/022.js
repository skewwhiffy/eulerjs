"use strict";

/*

Names scores
Problem 22
Using names.txt (right click and 'Save Link/Target As...'), a 46K text file
containing over five-thousand first names, begin by sorting it into alphabetical
order. Then working out the alphabetical value for each name, multiply this
value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is
worth 3 + 15 + 12 + 9 + 14 = 53, is the 938th name in the list. So, COLIN would
obtain a score of 938 × 53 = 49714.

What is the total of all the name scores in the file?

 */

let expect = require("chai").expect;
let fs = require("fs");

describe("Problem 22", function() {
    let names;
    let sortedNames;

    let alphabeticalValue = name => {
        let charValue = char => {
            let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return alphabet.indexOf(char) + 1;
        }
        return name.split("").map(charValue).reduce((p, c) => p + c, 0);
    }

    before(done => {
        fs.readFile("./problems/data/p022_names.txt", "utf8", (err, data) => {
            expect(!err).to.equal(true);
            names = data
                .substring(1, data.length - 1)
                .split("\",\"")
            sortedNames = names.map(n => n).sort();
            done();
        })
    })

    let solution = () => {
        let sum = 0;
        for(let i = 0; i < sortedNames.length; i++) {
            sum += alphabeticalValue(sortedNames[i]) * (i + 1);
        }
        return sum;
    }

    it("alphabetical value of 'C' is 3", () => {
        let value = alphabeticalValue("C");
        expect(value).to.equal(3);
    })

    it("alphabetical value of 'COLIN' is 53", () => {
        let value = alphabeticalValue("COLIN");
        expect(value).to.equal(53);
    })

    it("first and last names are correct", () => {
        let first = names[0];
        let last = names[names.length - 1];
        expect(first).to.equal("MARY");
        expect(last).to.equal("ALONSO");
    })

    it("names are sorted", () => {
        expect(sortedNames).to.have.lengthOf(names.length);
        for (let i = 0; i < sortedNames.length - 1; i++) {
            expect(sortedNames[i]).to.be.below(sortedNames[i + 1]);
        }
    })

    it("COLIN is 938th name in sorted list", () => {
        let index = sortedNames.indexOf("COLIN");
        expect(index + 1).to.equal(938);
    })

    it("solution: 871198282", () => {
        expect(solution()).to.equal(871198282);
    });
})
