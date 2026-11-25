"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseWords(str) {
    return str.split(" ")
        .map(word => word.split('').reverse().join(''))
        .join(" ");
}
console.log(reverseWords("Hello worlds TypeScript"));
