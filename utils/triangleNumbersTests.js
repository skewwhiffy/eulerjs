"use strict";

let expect = require("chai").expect;
let TriangleNumbers = require("./triangleNumbers");

describe("Triangle numbers", () => {
    let triangleNumbers = new TriangleNumbers();

    it("calculates the first ten triangle numbers", () => {
        let numbers = [];
        for(let i = 1; i <= 10; i++) {
            numbers.push(triangleNumbers.number(i));
        }
        expect(numbers).to.eql([1, 3, 6, 10, 15, 21, 28, 36, 45, 55]);
    });
})
