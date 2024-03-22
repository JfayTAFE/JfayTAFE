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
