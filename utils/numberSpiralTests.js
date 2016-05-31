"use strict"

let expect = require("chai").expect;
let NumberSpiral = require("./numberSpiral");

describe("Number spiral", () => {
    let spiral = new NumberSpiral();

    it("Works for central number", () => {
        let result = spiral.at(0, 0);
        expect(result).to.equal(1);
    })

    it("Works for 5x5 square", () => {
        let expected = [
            [21, 22, 23, 24, 25],
            [20, 7, 8, 9, 10],
            [19, 6, 1, 2, 11],
            [18, 5, 4, 3, 12],
            [17, 16, 15, 14, 13]
        ];
        for (let x = -2; x <= 2; x++) {
            for (let y = -2; y <= 2; y++) {
                let result = spiral.at(x, y);
                let expectedValue = expected[2-y][x+2];
                expect(result).to.equal(expectedValue);
            }
        }
    })
})
