"use strict";

let expect = require("chai").expect;
let Fibonacci = require("./fibonacci");

describe("Fibonacci", () => {
    let fib = new Fibonacci();

    it("calculates first 10 correctly", () => {
        let numbers = [];
        for (let i = 1; i <= 10; i++) {
            numbers.push(fib.sequence(i));
        }
        expect(numbers).to.eql([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
    })
})
