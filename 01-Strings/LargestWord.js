"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "I am learning Playwright automation testing";
let words = str.split(" ");
let largestWord = "";
for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    if (currentWord !== undefined && currentWord.length > largestWord.length) {
        largestWord = currentWord;
    }
}
console.log("Largest word:", largestWord);
