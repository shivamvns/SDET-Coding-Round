let str: string = "Programming";

let charCount: { [key: string]: number } = {};

for (let char of str) {
    charCount[char] = (charCount[char] ?? 0) + 1;
}

for (let char in charCount) {
    if (charCount[char] !== undefined && charCount[char] > 1) {
        console.log(`${char} = ${charCount[char]} times`);
    }
}