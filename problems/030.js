"use strict";

/*
Digit fifth powers
Problem 30
Surprisingly there are only three numbers that can be written as the sum of
fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers
of their digits.
*/
let expect = require("chai").expect;

describe.only("Problem 30", () => {
    let getPowers = power => {
        let powers = {};
        for (let i = 0; i <= 9; i++) {
            powers[i] = Math.pow(i, power);
        }
        return powers;
    }

    let getSumands = (start, totalDigits, powers) => {
        let digitsSoFar = start.length;
        let sumSoFar = start.map(i => powers[i]).reduce((p, c) => c + p, 0);
        if (digitsSoFar === totalDigits) {
            let target = 0;
            for (let i = 0; i < start.length; i++) {
                target *= 10;
                target += start[i];
            }
            return sumSoFar === target ? [target] : [];
        }
        return Object.keys(powers).map(i => {
            let newStart = start.slice();
            newStart.push(parseInt(i));
            let sumands = getSumands(newStart, totalDigits, powers);
            return sumands;
        }).reduce((p, c) => {
            for (let i = 0; i < c.length; i++) {
                p.push(c[i]);
            }
            return p;
        }, []);
    }

    let solution = (power, numberOfDigits) => {
        let powers = getPowers(power);
        let upperLimit = Math.pow(10, numberOfDigits);
        let sumands = getSumands([], numberOfDigits, powers);
        return sumands.filter(i => i >= 10).reduce((p, c) => p + c);
    }

    it("Calculates powers", () => {
        let thirdPowers = getPowers(3);
        let expected = {
            0: 0,
            1: 1,
            2: 8,
            3: 27,
            4: 64,
            5: 125,
            6: 36*6,
            7: 49*7,
            8: 64*8,
            9: 81*9
        }
    })

    it("Works for fourth power", () => {
        let answer = solution(4, 4);
        expect(answer).to.equal(19316);
    })

    it("Solution: 443839", function() {
        this.timeout(5000);
        let answer = solution(5, 6);
        expect(answer).to.equal(443839);
    })
})
