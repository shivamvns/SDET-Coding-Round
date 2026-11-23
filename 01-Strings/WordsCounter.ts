function wordCounter(str: string):number{
    if (str.trim() === "") {
        return 0;
    }

    return str.trim().split(/\s+/).length;


}

console.log(wordCounter("Hello World How Are You"));
// Output: 5

console.log(wordCounter("   "));
// Output: 0
