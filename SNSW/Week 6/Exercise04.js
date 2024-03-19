// npm install readline-sync

const readlineSync = require('readline-sync');

const daysArray = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`]

const userInput = readlineSync.question('What day is it _ days from now? ');

// Convert to int
const userNumber = parseInt(userInput);

// Check if userNumber is actually a number
if (!isNaN(userNumber) && userNumber >= 1)
{
    // Subtract 1 to get the array index
    // Modulo to find remainder if over 7 days
    const index = (userNumber - 1) % daysArray.length;
    // Select correct index
    const selectedDay = daysArray[index];

    // Check weekend indexes
    if (userNumber == 1 || userNumber == 7)
    {
        console.log(`The day ${userNumber} days from now is ${selectedDay}. It is the weekend`);
    }
    else
    {
        console.log(`The day ${userNumber} days from now is ${selectedDay}. It is not the weekend`);
    }
}
else
{
    console.log('Invalid input. Please enter a number from 1 to 7.');
}