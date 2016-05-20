"use strict";

var expect = require("chai").expect;
var Palindrome = require("./palindrome");

describe("Palindrome detection", () => {
    let palindrome = new Palindrome();

    it("works for single digit", () => {
        expect(palindrome.isPalindrome(5)).to.equal(true);
    })

    it("works for double digit palindrome", () => {
        expect(palindrome.isPalindrome(55)).to.equal(true);
    })

    it("works for double digit non-palindrome", () => {
        expect(palindrome.isPalindrome(56)).to.equal(false);
    })

    it("works for long palindrome", () => {
        expect(palindrome.isPalindrome("9234224329")).to.equal(true);
    })
})
