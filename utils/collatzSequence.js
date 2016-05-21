 "use strict";

 module.exports = function() {
     let self = this;

     let cache = {
         1: 1
     };

     self.length = start => {
         if (cache[start]) return cache[start];
         if (!cache[start]) {
             let newStart = start % 2 === 0 ? start / 2 : 3 * start + 1;
             cache[start] = 1 + self.length(newStart);
         }
         return cache[start];
     }
 }
