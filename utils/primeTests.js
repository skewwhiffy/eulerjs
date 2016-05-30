"use strict";

var expect = require("chai").expect;
var Prime = require("./prime");

describe("Generating primes", () => {
    let prime = new Prime();

    it("generates first ten primes correctly", () => {
        let primes = [];
        for (let i = 0; i < 10; i++) {
            primes.push(prime.prime(i));
        }
        expect(primes).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    })

    it("generated 10000th prime correctly", () => {
        expect(prime.prime(9999)).to.equal(104729);
    })

    it("detects primes correctly", () => {
        let somePrime = 4583;
        let result = prime.isPrime(somePrime);
        expect(result).to.equal(true);
    })

    it("detects non-primes correctly", () => {
        let someNonPrime = 4585;
        let result = prime.isPrime(someNonPrime);
        expect(result).to.equal(false);
    })
})
