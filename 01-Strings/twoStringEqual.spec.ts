let str1:string="Shivam"
let str2:string="Shivam"


function compareStrings(str1:string, str2:string): boolean{

    return str1===str2
}


console.log(compareStrings("Hello", "Hello")); // true
console.log(compareStrings("Hello", "World")); // false