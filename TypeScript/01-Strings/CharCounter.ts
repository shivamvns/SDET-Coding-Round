function countOccurrences(str: string, char: string): number {

    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count;
}

console.log(countOccurrences("Shivamm", "K")); // 2
// console.log(countOccurrences("automation", "a")); // 2