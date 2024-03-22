function generateRandomNumbers(min: number, max: number): number
{
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}

const numberArray: number[] = [];

for (let count = 0; count < 10; count++)
{
    const number = generateRandomNumbers(0, 50);
    numberArray.push(number)
}

console.log(numberArray);

numberArray.sort((number1, number2) => number1 - number2);

console.log(`Lowest number: ${numberArray[0]}`);