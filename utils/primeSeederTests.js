"use strict";

var expect = require("chai").expect;
var PrimeSeeder = require("./primeseeder");

describe("Reseeding", () => {
    let seed = new PrimeSeeder();

    it("Reseeds from initial value", () => {
        seed.seed = [false, false];
        let newSeed = seed.reseed();
        expect(newSeed).to.eql([false, false, true, true]);
    })

    it("Reseeds from larger value", () => {
        seed.seed = [false, false, true, true];
        let newSeed = seed.reseed();
        let expected = [];
        let primesTo8 = [2, 3, 5, 7];
        for(let i = 0; i < 8; i++) {
            expected.push(false);
        }
        primesTo8.forEach(i => expected[i] = true);
        expect(newSeed).to.eql(expected);
    })
})
