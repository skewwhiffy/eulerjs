"use strict";

module.exports = function() {
    let self = this;

    self.isPalindrome = source => {
        if (typeof source !== "string") source = source.toString();
        let left = 0;
        let right = source.length - 1;
        while (right > left) {
            if (source[left] !== source[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
