"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function wordCounter(str) {
    if (str.trim() === "") {
        return 0;
    }
    return str.trim().split(/\s+/).length;
}
console.log(wordCounter("Hello HI World How Are You"));
// Output: 5
console.log(wordCounter("   "));
// Output: 0
