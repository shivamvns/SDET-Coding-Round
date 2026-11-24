"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences("Shivamm", "K")); // 2
// console.log(countOccurrences("automation", "a")); // 2
