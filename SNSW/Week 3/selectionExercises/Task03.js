var readlineSync = require('readline-sync');


const symbols = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const vowels = /[aeiou]/;
const consonants = /[bcdfgjklmnpqstvxzhrwy]/;
const numbers = /[0-9]/;

function SymbolsTest(userInput)
{
    return symbols.test(userInput);
}

function VowelsTest(userInput)
{
    return vowels.test(userInput);
}

function ConsonantsTest(userInput)
{
    return consonants.test(userInput);
}

function NumberTest(userInput)
{
    return numbers.test(userInput);
}


let input = readlineSync.question(`What letter will you check? `);

inputLower = input.toLowerCase();

console.log(`${inputLower}`)

if (SymbolsTest(inputLower))
{
    console.log(`${inputLower} is a symbol`);
}

else if (VowelsTest(inputLower))
{
    console.log(`${inputLower} is a vowel`);
}

else if (ConsonantsTest(inputLower))
{
    console.log(`${inputLower} is a consonant`);
}

else if (NumberTest(inputLower))
{
    console.log(`${inputLower} is a number`);
}

else
{
    console.log(`Invalid input`)
}