"use strict";

let expect = require("chai").expect;
let MaximumPathSum = require("./maximumPathSum");

describe("Maximum path sum", () => {
    let maximumPathSum = new MaximumPathSum();

    it("Transforms data correctly", () => {
        let data = [
            "3",
            "7 4",
            "2 4 6",
            "8 5 9 3"
        ];
        let transformed = maximumPathSum.transform(data);
        expect(transformed).to.eql([
            [3],
            [7, 4],
            [2, 4, 6],
            [8, 5, 9, 3]
        ]);
    })

    it("works for test data", () => {
        let data = [
            [3],
            [7, 4],
            [2, 4, 6],
            [8, 5, 9, 3]
        ];
        let maxSum = maximumPathSum.maxSum(data);
        expect(maxSum).to.equal(23);
    })
})
