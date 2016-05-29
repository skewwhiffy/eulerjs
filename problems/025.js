"use strict";

/*

1000-digit Fibonacci number
Problem 25
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F_1 = 1 and F_2 = 1.
Hence the first 12 terms will be:

F_1 = 1
F_2 = 1
F_3 = 2
F_4 = 3
F_5 = 5
F_6 = 8
F_7 = 13
F_8 = 21
F_9 = 34
F_10 = 55
F_11 = 89
F_12 = 144
The 12th term, F_12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

let expect = require("chai").expect;
let Fibonacci = require("../utils/fibonacci");

describe("Problem 25", function() {
    let fib = new Fibonacci();

    it("solution: 4782", function() {
        let current;
        while(true) {
            current = fib.iterate(current);
            if (current.current.toString().length === 1000) break;
        }
        expect(current.index).to.equal(4782);
    })
})
