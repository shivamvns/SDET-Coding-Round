"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let word = "Ramesh";
let vowel = 0;
let Consonant = 0;
for (let char of word.toLowerCase()) {
    if ("aeiou".includes(char)) {
        vowel++;
    }
    else if (char > 'a' && char < 'z') {
        Consonant++;
    }
}
console.log("Vowels:", vowel);
console.log("Consonants:", Consonant);
