"use strict";

/*

Quadratic primes
Problem 27
Euler discovered the remarkable quadratic formula:

n² + n + 41

It turns out that the formula will produce 40 primes for the consecutive values
n = 0 to 39. However, when n = 40, 40^2 + 40 + 41 = 40(40 + 1) + 41 is divisible
by 41, and certainly when n = 41, 41² + 41 + 41 is clearly divisible by 41.

The incredible formula  n² − 79n + 1601 was discovered, which produces 80
primes for the consecutive values n = 0 to 79. The product of the coefficients,
−79 and 1601, is −126479.

Considering quadratics of the form:

n² + an + b, where |a| < 1000 and |b| < 1000

where |n| is the modulus/absolute value of n
e.g. |11| = 11 and |−4| = 4
Find the product of the coefficients, a and b, for the quadratic expression that
produces the maximum number of primes for consecutive values of n, starting with
n = 0.

*/

let expect = require("chai").expect;
let Prime = require("../utils/prime");

describe("Problem 27", function() {
    let prime = new Prime();

    it("solution: -59231", function() {
        this.timeout(5000);
        let largestNumberOfPrimes = 0;
        let quadraticDetails;
        let primesTo1000 = [];
        let i = 0;
        while (true) {
            let p = prime.prime(i);
            if (p > 1000) break;
            primesTo1000.push(p);
            i++;
        }
        // By considering n = 0, b is prime.
        primesTo1000.forEach(b => {
            // By considering n = 1, a is even <=> b is even.
            let start = b === 2 ? -1000 : -999;
            for (let a = start; a <= 1000; a+=2) {
                let quad = n => (n * n) + (a * n) + b;
                let n = 0;
                while (prime.isPrime(quad(n))) n++;
                if (n > largestNumberOfPrimes) {
                    largestNumberOfPrimes = n;
                    quadraticDetails = {a, b};
                }
            }
        })
        let product = quadraticDetails.a * quadraticDetails.b;
        expect(product).to.equal(-59231);
    })
})
