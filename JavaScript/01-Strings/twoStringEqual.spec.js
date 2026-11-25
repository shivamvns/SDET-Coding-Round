"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str1 = "Shivam";
let str2 = "Shivam";
function compareStrings(str1, str2) {
    return str1 === str2;
}
console.log(compareStrings("Hello", "Hello")); // true
console.log(compareStrings("Hello", "World")); // false
