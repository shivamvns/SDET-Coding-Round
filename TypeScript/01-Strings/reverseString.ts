
//printing the characters of given string in reverse
let Fname: string = "Shivam"

// for (let i = Fname.length - 1; i >= 0; i--) {
//   console.log(Fname[i])
// }


//shortcut inbuilt method
// let reverse: string = Fname.split("").reverse().join()
// console.log(reverse)


let revFname:string=''

for (let i = Fname.length - 1; i >= 0; i--) {
  revFname= revFname +Fname[i]
}

console.log(revFname)
