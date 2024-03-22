function halveNumbers(number: number, limit: number): void
{
    while (number >= limit)
    {
        console.log(number);
        number /= 2 // Divide num by 2 in each iteration
    }
}

const startingNumber = 1;
const limit = 0.001;
halveNumbers(startingNumber, limit);