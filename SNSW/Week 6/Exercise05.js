/*
let number = 0

while (number < 100)
{
    number++;

    if (number % 3 == 0 & number % 5 == 0)
    {
        console.log(`FizzBuzz`);
    }
    else if (number % 5 == 0)
    {
        console.log(`Buzz`);
    }
    else if (number % 3 == 0)
    {
        console.log(`Fizz`);
    }
    else
    {
        console.log(number);
    }
}
*/

//---------------------------------------

for (let number = 0; number < 100; number++)
{
    if (number % 3 == 0 & number % 5 == 0)
    {
        console.log(`FizzBuzz`);
    }
    else if (number % 5 == 0)
    {
        console.log(`Buzz`);
    }
    else if (number % 3 == 0)
    {
        console.log(`Fizz`);
    }
    else
    {
        console.log(number);
    }
}