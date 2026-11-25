let word: string = "Automation";

let count = 0;
const vowels = "aeiou";

for (const char of word.toLowerCase()) {
    if (vowels.includes(char)) {
        count++;
    }
}

if (count > 0) {
    console.log("Total vowels:", count);
} else {
    console.log("No vowel is present");
}