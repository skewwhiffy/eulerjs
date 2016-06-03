"use strict";

/*

Each new term in the Fibonacci sequence is generated by adding the previous
two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed
four million, find the sum of the even-valued terms.

 */

let expect = require("chai").expect;
let Fibonacci = require("../utils/fibonacci");

describe("Problem 2", function() {
    let fib = new Fibonacci();

    let relevantSum = exclusiveUpperLimit => {
        let numbers = [];
        for (let i = 1; i < exclusiveUpperLimit; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                numbers.push(i);
            }
        }
        return numbers.reduce((p, c) => p + c, 0);
    }

    it("Solution: 4613732", () => {
        let sum = 0;
        let i = 1;
        while (true) {
            let value = fib.sequence(i);
            if (value >= 4000000) break;
            if (value % 2 === 0) sum += value;
            i++;
        }
        expect(sum).to.equal(4613732)
    })
})
