"use strict";
// declaration types
Object.defineProperty(exports, "__esModule", { value: true });
let tester = "shivam";
let tool = `Playwright`;
// console.log(`${tester} is using ${tool} for testing`)
// indexing: string starts with 0
// console.log(tool.length); // 10
// console.log(tool);         // P
// console.log(tool[4]);     // W
// console.log(tool[9]);     // T
// console.log(tool.at(-1)); // T
// console.log(tool.at(-2))   //H
// Essential string methods
// console.log(tool.length);
// console.log(tool.toUpperCase())
// console.log(tool.toLowerCase())
// console.log(tester.trim())
// console.log(tool.includes('Play'))
// console.log(tool.startsWith("Pl"))
// console.log(tool.endsWith("ght"))
// console.log(tool.indexOf('Y'))
// console.log(tool.slice())
// console.log(tool.split())
// console.log(tool.replace())
// console.log(tool.replaceAII())
//loop through string characters
const str = "SDET";
//Traditional For Loop
// for (let i = 0; i < tool.length; i++) {
//   console.log(tool[i]);
// }
// for..of loop
for (const char of tester) {
    console.log(char);
}
