// npm install readline-sync

const readlineSync = require('readline-sync');

// Seach array method
/*
const nameArray = []
let duplicateNameArray = []

// 5 name loop
for (let count = 0; count < 5; count++)
{
    const userInput = readlineSync.question('Enter a name: ');

    // .includes check array for element returning true or false
    // Add name depending on if it already exists
    if (nameArray.includes(userInput))
    {
        nameArray.push(userInput);
        duplicateNameArray.push(userInput);
    }
    else
    {
        nameArray.push(userInput);
    }
}

// Sort array alphabetically
nameArray.sort();

// Display the final array on seperate lines
console.log('\nNames:');
for (const name of nameArray) 
{
    console.log(name);
}

console.log('\nDuplicate names:');
for (const name of duplicateNameArray) 
{
    console.log(name);
}
*/

//-----------------------------------

// Dictionary method
const nameArray = [];
const nameDictionary = {};

let duplicateNameArray = [];

// 5 name loop
for (let count = 0; count < 5; count++)
{
    const userInput = readlineSync.question('Enter a name: ');

    // If name is a key in the dictionary . . else
    if (nameDictionary[userInput])
    {
        nameArray.push(userInput);
        duplicateNameArray.push(userInput);
    }
    else
    {
        // Add name as key to dictionary
        nameDictionary[userInput] = true;
        nameArray.push(userInput);
    }
}

// Sort array alphabetically
nameArray.sort();

// Display the final arrays on separate lines
console.log('\nNames:');
for (const name of nameArray) 
{
    console.log(name);
}

console.log('\nDuplicate names:');
for (const name of duplicateNameArray) 
{
    console.log(name);
}