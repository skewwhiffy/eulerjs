"use strict";

module.exports = function() {
    let self = this;

    let permuteInternal = (sourceArray, stopAt) => {
        if (sourceArray.length === 1) return [sourceArray[0]];
        let result = [];
        for (let i = 0; i < sourceArray.length; i++) {
            let newStopAt = false;
            if (stopAt) newStopAt = stopAt - result.length;
            let start = sourceArray[i];
            let newSourceArray = sourceArray.map(x => x);
            newSourceArray.splice(i, 1);
            let subPermute = permuteInternal(newSourceArray, newStopAt);
            for (let j = 0; j < subPermute.length; j++) {
                let newElement = start + subPermute[j];
                result.push(newElement);
                if (stopAt && result.length === stopAt) return result;
            }
        }
        return result;
    }

    self.permute = (source, stopAt) => {
        let sourceArray = source.split("").sort();
        return permuteInternal(sourceArray, stopAt);
    }
}
