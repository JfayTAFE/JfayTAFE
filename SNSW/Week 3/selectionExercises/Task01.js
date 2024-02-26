var readlineSync = require('readline-sync');

let studentScore = readlineSync.question(`What was your total score? `)

if (studentScore < 50 && studentScore > -1)
{
    console.log(`Score is ${studentScore}: FAIL`);
}

else if (studentScore < 101 && studentScore > 49)
{
    console.log(`Score is ${studentScore}: PASS`);
}

else
{
    console.log(`Score is invalid`);
}