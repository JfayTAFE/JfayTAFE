// npm install readline-sync

const readlineSync = require('readline-sync');

const nameArray = []

// 5 name loop
for (let count = 0; count < 5; count++)
{
    const userInput = readlineSync.question('Enter a name: ');
    nameArray.push(userInput);
}

// Sort array alphabetically
nameArray.sort();

// Display the final array on seperate lines
console.log('\nNames:');

for (const name of nameArray) 
{
    console.log(name);
}