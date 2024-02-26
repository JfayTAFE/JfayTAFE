/*
Exercise 1:
 You are to write a program that will output all odd numbers between 1 and 100.
 Write a version that uses a while loop
Write a version that uses for loop.
*/
/*
let count = 1;

while (count < 100)
{
    console.log(count);
    count +=2;
}
*/
/*
for (let count = 1; count < 100; count += 2)
{
    console.log(count);
}
*/

/*
Exercise 2:

Write a program that will maintain a running total and an average.
Read input from the user until EOF (End of File/CTRL+D) is reached (if on windows, detect if the
user has entered 'END' string).
*/
/*
var readlineSync = require('readline-sync');

let count = 0;
let total = 0;
let completed = false;

while (!completed)
{
    let line = readlineSync.question('Enter a number: ');
    let number = parseInt(line);

    if (!isNaN(number))
    {
        total += number;
        count++;
    }
    else
    {
        if (line == "END")
        {
            completed = true;
        }
        else
        {
            console.log("Entry was not a number");
        }
    }
}
*/

/*
Exercise 3:
 
Create a program that will output the timestable of a number specified from user input. This
should only be until we have reached a multiplication of n * 12.
Example when input is 6:
6
12
18
24
30
36
42
48
54
60
66
72
*/
/*
var readlineSync = require('readline-sync');

let userNumber = readlineSync.question('Enter a number: ');
let number = parseInt(userNumber);

for (let count = 1; count < 13; count++)
{
    console.log(number * i);
}
*/

/*
Exercise 4 - Most Common Vowel:
 
Write a program that will find the most common vowel within a string. This will only include
characters within the alphabet.
 You may develop a solution that can be case-sensitive. The string will be given via user input.
 
Example:
Enter a word: Hello World!
The most common vowel is 'o'
 
Hint: Use the get method that is associated with strings.
 
Example:
 let str = "My String"
console.log(str[1])) //outputs 'y'
*/

var readlineSync = require('readline-sync');
let userInput = readlineSync.question('Enter a number: ');

let vowels = ['a', 'e', 'i', 'o', 'u'];
let counts = [ 0, 0, 0, 0, 0];

function GetVowelIndex(ch, vowels)
{
    for (let count = 0; count < vowels; count++)
    if (ch == vowels[count])
    {
        return count;
    }
}

for(let count = 0; count < userInput.length; count++)
{

}

/*
Exercise 5 - Finding an element within an array
 
Construct a program with an array of numbers, ask the user to specify a number they want to find within that array and check to see if the number exists within the array.
If the number exists, output "Congratulations! You found the number!"
If the number does not exist, output "Oh no! It isn't in the array!"
*/
/*
var readlineSync = require('readline-sync');
const numberArray = [1, 3, 5, 7, 9]

let userNumber = readlineSync.question('Enter a number: ');

if (numberArray.indexOf(userNumber) !== -1)
{
    console.log(`${userNumber} exists in array`);
}
else
{
    console.log(`${userNumber} does not exist in array`);
}
*/