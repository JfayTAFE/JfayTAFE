function generateRandomNumbers(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}
var numberArray = [];
for (var count = 0; count < 10; count++) {
    var number = generateRandomNumbers(0, 50);
    numberArray.push(number);
}
console.log(numberArray);
// Sort array
// Compares 2 elements in the array
// If number1 is less than number2, the result will be negative, number1 should come before number2
// If number2 is less than number1, the result will be positive, number2 should come before number1
numberArray.sort(function (number1, number2) { return number1 - number2; });
/*
numberArray.sort(function(number1, number2)
{
    return number1 - number2;
});
*/
var sum = 0;
for (var count = 0; count < numberArray.length; count++) {
    sum += numberArray[count];
}
var average = sum / numberArray.length;
console.log("Lowest number: ".concat(numberArray[0]));
console.log("Highest number: ".concat(numberArray[9]));
console.log("Average: ".concat(average));
