// using regEX

// function isOnlyDigits(str: string): boolean {
//     return /^[0-9]+$/.test(str);
// }

// console.log(isOnlyDigits("123456")); // true
// console.log(isOnlyDigits("123a56")); // false
// console.log(isOnlyDigits("123 456")); // false
// console.log(isOnlyDigits(""));       // false



// using for of loops
function stringChecker(str:string):boolean{

    if(str.length===0){
        return false;
    }

    for(let char of str){
        if( char<'0' || char>'9'){
            return false;
        }
    }

    return true
}
