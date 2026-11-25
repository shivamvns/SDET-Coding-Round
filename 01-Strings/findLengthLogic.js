"use strict";
//find the length of the string without .length()
Object.defineProperty(exports, "__esModule", { value: true });
function findLength(str) {
    let count = 0;
    for (let char of str) {
        count++;
    }
    return count;
}
console.log(findLength("Shivam Srivastava"));
