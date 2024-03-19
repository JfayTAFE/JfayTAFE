function generateNumberSequence(n)
{
    const numberArray = [];
    const sequenceLength = 7; // Length of the repeating numbers
    
    for (let count = 0; count < n; count++)
    {
        // (count % sequenceLength) will be a value between 0 and 6
        // -3 to move the centre of this remainder around 0
        const value = (count % sequenceLength) - 3;
        numberArray.push(value);
    }

    return numberArray;
}

// Example
console.log(generateNumberSequence(14));
