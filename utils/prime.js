"use strict";

let PrimeSeeder = require("./primeSeeder");

module.exports = function() {
    let self = this;
    let seeder = new PrimeSeeder();
    let primes = [2];

    let generateMorePrimes = () => {
        let newSeed = seeder.reseed();
        for(let i = primes[primes.length - 1] + 1; i < newSeed.length; i++) {
            if (newSeed[i]) primes.push(i);
        }
    }

    self.prime = i => {
        while (i >= primes.length) generateMorePrimes();
        if (i < primes.length) return primes[i];
    }

    self.isPrime = x => {
        while (primes[primes.length - 1] < x) generateMorePrimes();
        return primes.indexOf(x) > -1;
    }
}
