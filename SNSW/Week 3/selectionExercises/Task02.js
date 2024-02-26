var readlineSync = require('readline-sync');

let studentScore = readlineSync.question(`What was your total score? `)

if (studentScore < 0)
{
    console.log(`ERROR`);
}

else if (studentScore >= 1 && studentScore <= 49)
{
    console.log(`FAIL`);
}

else if (studentScore >= 50 && studentScore <= 64)
{
    console.log(`PASS`);
}

else if (studentScore >= 65 && studentScore <= 79)
{
    console.log(`CREDIT`);
}

else if (studentScore >= 80 && studentScore <= 100)
{
    console.log(`DISTINCTION`);
}

else if (studentScore > 100)
{
    console.log(`ERROR`);
}

else
{
    console.log(`Score is invalid`);
}