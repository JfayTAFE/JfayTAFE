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

// Sort array
// Compares 2 elements in the array
// If number1 is less than number2, the result will be negative, number1 should come before number2
// If number2 is less than number1, the result will be positive, number2 should come before number1
numberArray.sort((number1, number2) => number1 - number2);
/*
numberArray.sort(function(number1, number2) 
{
    return number1 - number2;
});
*/

let sum = 0;
for (let count = 0; count < numberArray.length; count++)
{
    sum += numberArray[count]
}
let average = sum / numberArray.length;


console.log(`Lowest number: ${numberArray[0]}`);
console.log(`Highest number: ${numberArray[9]}`);
console.log(`Average: ${average}`);