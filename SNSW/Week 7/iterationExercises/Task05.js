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
numberArray.sort(function (number1, number2) { return number1 - number2; });
console.log("Lowest number: ".concat(numberArray[0]));
