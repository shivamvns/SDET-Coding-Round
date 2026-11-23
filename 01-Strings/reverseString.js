"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//printing the characters of given string in reverse
let Fname = "Shivam";
// for (let i = Fname.length - 1; i >= 0; i--) {
//   console.log(Fname[i])
// }
//shortcut inbuilt method
// let reverse: string = Fname.split("").reverse().join()
// console.log(reverse)
let revFname = '';
for (let i = Fname.length - 1; i >= 0; i--) {
    revFname = revFname + Fname[i];
}
console.log(revFname);
