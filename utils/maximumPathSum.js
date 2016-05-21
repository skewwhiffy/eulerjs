"use strict";

module.exports = function() {
    let self = this;

    self.transform = raw => {
        let split = raw.map(row => row.split(" "));
        let transformed = split.map(row => row.map(x => {return parseInt(x);}));
        return transformed;
    }

    self.maxSum = data => {
        if (data.length === 1) return data[0][0];
        let leftTriangle = [];
        let rightTriangle = [];
        for(let i = 1; i < data.length; i++) {
            let left = [];
            let right = [];
            left.push(data[i][0]);
            for(let j = 1; j < data[i].length - 1; j++) {
                left.push(data[i][j]);
                right.push(data[i][j]);
            }
            right.push(data[i][data[i].length - 1]);
            leftTriangle.push(left);
            rightTriangle.push(right);
        }
        let leftMaxSum = self.maxSum(leftTriangle);
        let rightMaxSum = self.maxSum(rightTriangle);
        return data[0][0] + (leftMaxSum < rightMaxSum ? rightMaxSum : leftMaxSum);
    }
}
