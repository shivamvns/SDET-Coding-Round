"use strict";
//For a single word
Object.defineProperty(exports, "__esModule", { value: true });
// let word:string="Madam"
// let reversed = "";
// for (let i = word.length - 1; i >= 0; i--) {
//         reversed += word[i];
//     }
//     let result: boolean = word.toLowerCase() === reversed.toLowerCase();
//      console.log(result)
// For a sentence
let str = "A man a plan a canal Panama";
// Step 1: Convert to lowercase and remove spaces
let cleanedStr = str.toLowerCase().replace(/\s/g, "");
// Step 2: Initialize two pointers
let left = 0;
let right = cleanedStr.length - 1;
let isPalindrome = true;
// Step 3: Compare characters from both ends
while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}
// Step 4: Print result
if (isPalindrome) {
    console.log("Palindrome");
}
else {
    console.log("Not a Palindrome");
}
