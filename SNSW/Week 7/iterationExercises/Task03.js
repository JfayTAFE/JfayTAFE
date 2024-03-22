function halveNumbers(number, limit) {
    while (number >= limit) {
        console.log(number);
        number /= 2; // Divide num by 2 in each iteration
    }
}
var startingNumber = 1;
var limit = 0.001;
halveNumbers(startingNumber, limit);
