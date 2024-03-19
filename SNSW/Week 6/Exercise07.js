arrayA = [1, 2, 3, 4, 5];
arrayB = [10, 20, 30, 40, 50];

console.log("Before swapping:");
console.log("Array A:", arrayA);
console.log("Array B:", arrayB);

/*
//function arraySwap(arrayA: [], arrayB: [])
function arraySwap(swappedArrayA, swappedArrayB) 
{
    [swappedArrayA, swappedArrayB] = [swappedArrayB, swappedArrayA];
    return [swappedArrayA, swappedArrayB];
}
*/

//function arraySwap(arrayA: [], arrayB: [])
function arraySwap(swappedArrayA, swappedArrayB)
{
    // Swap 1 by 1
    for (count = 0; count < swappedArrayA.length; count++)
    {
        // Store 'count'-th element in array as temp variable
        let temp = swappedArrayA[count];
        // Store 'count'-th element in arrayA as same element in arrayB
        swappedArrayA[count] = swappedArrayB[count];
        // Store temp value to 'count'-th element in array as temp variable
        swappedArrayB[count] = temp;
    }

    return [swappedArrayA, swappedArrayB];
}

[swappedArrayA, swappedArrayB] = arraySwap(arrayA, arrayB);

console.log("After swapping:");
console.log("Array A:", swappedArrayA);
console.log("Array B:", swappedArrayB);
