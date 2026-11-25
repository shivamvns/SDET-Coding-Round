"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "Programming";
let charCount = {};
for (let char of str) {
    charCount[char] = (charCount[char] ?? 0) + 1;
}
for (let char in charCount) {
    if (charCount[char] !== undefined && charCount[char] > 1) {
        console.log(`${char} = ${charCount[char]} times`);
    }
}
