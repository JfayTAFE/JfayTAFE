import * as readlineSync from 'readline-sync';

let score: number = 0;
function rollDice(): void
{
    while (true)
    {
        const userOutcome: number = parseInt(readlineSync.question
        ('What will be the outcome of 2 6-sided die? '));
        
        const die1: number = Math.floor(Math.random() * 6) + 1;
        const die2: number = Math.floor(Math.random() * 6) + 1;
        let dieTotal: number = die1 + die2;
        console.log(`The die rolled ${dieTotal}`);
        score += 1;
    
        if (userOutcome == dieTotal)
        {
            console.log(`You guessed correctly with ${score} tries`);
            break;
        }
        else
        {
            console.log(`Wrong guess. Try again`);
        }
    }
}

rollDice();