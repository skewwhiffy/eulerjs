"use strict";

let expect = require("chai").expect;
let Permutations = require("./permutations")

describe("Permutation", function() {
    let perms = new Permutations();

    it("Lexicographic permutation works for 1 element", () => {
        let perm = perms.permute("0");
        expect(perm).to.eql(["0"])
    })

    it("Lexicographic permutation works", () => {
        let perm = perms.permute("012");
        expect(perm).to.eql(["012", "021", "102", "120", "201", "210"])
    });

    it("Lexicographic permutation stops", () => {
        let perm = perms.permute("012", 4);
        expect(perm).to.eql(["012", "021", "102", "120"])
    })

    it("Lexicographic permuation can pick out a single index", () => {
        let permArray = perms.permute("01234");
        for (let i = 0; i < permArray.length; i++) {
            let perm = perms.permutationAt("01234", i);
            expect(perm).to.equal(permArray[i]);
        }
    })
})
