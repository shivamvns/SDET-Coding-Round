let word:string="Ramesh"


let vowel: number=0
let Consonant: number=0


for(let char of word.toLowerCase()){
    if ("aeiou".includes(char)) {
            vowel++;
        }

        else if(char>'a' && char<'z'){
            Consonant++
        }
}


 console.log("Vowels:", vowel);
    console.log("Consonants:", Consonant);