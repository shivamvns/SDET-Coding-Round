//find the length of the string without .length()


function findLength(str:string):number{

    let count:number=0;

    for (let char of str) {
        count++;
    }

    return count;
}

console.log(findLength("Shivam Srivastava"));