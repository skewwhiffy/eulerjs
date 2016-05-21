"use strict";

module.exports = function() {
    let self = this;

    let basic = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };
    let tens = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    self.toWords = number => {
        if (basic[number]) return basic[number];
        if (number < 100) {
            let remainder = number % 10;
            let ten = number - remainder;
            let result = tens[ten];
            if (remainder !== 0) result += "-" + self.toWords(remainder);
            return result;
        }
        if (number < 1000) {
            let remainder = number % 100;
            let hundred = number - remainder;
            let result = self.toWords(hundred / 100) + " hundred";
            if (remainder !== 0) result += " and " + self.toWords(remainder);
            return result;
        }
        if (number === 1000) return "one thousand";
    }
}
